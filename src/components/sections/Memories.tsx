import { useEffect, useRef, useState } from "react";
import { ImagePlus, Loader2, X, Images } from "lucide-react";
import { ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";
import { supabase } from "@/integrations/supabase/client";

interface Memory {
  id: string;
  image_path: string;
  caption: string | null;
  url?: string | undefined;
}

const ROW_LIMIT = 12;

async function withUrls(rows: Memory[]): Promise<Memory[]> {
  if (!rows.length) return [];
  const { data } = await supabase.storage
    .from("memories")
    .createSignedUrls(
      rows.map((r) => r.image_path),
      60 * 60 * 24 * 7,
    );
  return rows.map((r, i) => ({ ...r, url: data?.[i]?.signedUrl ?? undefined }));
}

export function Memories({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [photos, setPhotos] = useState<Memory[]>([]);
  const [uploading, setUploading] = useState(false);
  const [albumOpen, setAlbumOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let alive = true;
    (async () => {
      const { data, error } = await supabase
        .from("memories")
        .select("id, image_path, caption, created_at")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("[memories fetch]", error.message);
        return;
      }
      const withSigned = await withUrls((data ?? []) as Memory[]);
      if (alive) setPhotos(withSigned);
    })();
    return () => {
      alive = false;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = albumOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [albumOpen]);

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);

    for (const file of Array.from(files).slice(0, 6)) {
      if (!file.type.startsWith("image/")) continue;
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from("memories")
        .upload(path, file, { cacheControl: "3600", upsert: false });

      if (upErr) {
        console.error("[memory upload]", upErr.message);
        continue;
      }

      const { data, error } = await supabase
        .from("memories")
        .insert({ image_path: path })
        .select("id, image_path, caption")
        .single();

      if (error) console.error("[memory insert]", error.message);
      if (data) {
        const withUrl = (await withUrls([data as Memory]))[0];
        if (withUrl) setPhotos((prev) => [withUrl, ...prev]);
      }
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const rowPhotos = photos.slice(0, ROW_LIMIT);
  const showAlbumButton = photos.length > ROW_LIMIT;

  return (
    <section className="bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionLabel>{t.memoriesTitle}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-4xl font-medium leading-tight text-wine-deep sm:text-5xl">
            {t.memoriesQuestion}
          </h2>
          <p className="font-display mx-auto mt-4 max-w-md text-lg italic text-muted-foreground">
            {t.memoriesLine}
          </p>
        </Reveal>

        {/* Scrolling photo row — above the upload button */}
        {rowPhotos.length > 0 && (
          <div className="mt-10 -mx-6 overflow-x-auto scrollbar-none">
            <div
              className="flex snap-x snap-mandatory gap-3 px-6 pb-2"
              style={{ width: "max-content" }}
            >
              {rowPhotos.map((m) => (
                <div
                  key={m.id}
                  className="animate-fade-up h-48 w-36 flex-shrink-0 snap-start overflow-hidden rounded-2xl shadow-md ring-1 ring-border transition-transform duration-500 hover:scale-105"
                >
                  {m.url && (
                    <img
                      src={m.url}
                      alt="A memory shared by a guest"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {rowPhotos.length > 0 && (
          <p className="mt-3 text-xs italic text-muted-foreground">
            {t.memoriesHint}
          </p>
        )}

        {showAlbumButton && (
          <button
            onClick={() => setAlbumOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-wine/30 px-6 py-3 text-sm font-medium tracking-[0.1em] text-wine transition-colors hover:bg-wine/5"
          >
            <Images className="h-4 w-4" /> {t.viewAllPhotos} ({photos.length})
          </button>
        )}

        {/* Upload button */}
        <div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => onFiles(e.target.files)}
          />
          <button
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-wine px-8 py-4 text-sm font-medium tracking-[0.12em] text-ivory shadow-[0_16px_40px_-14px] shadow-wine/60 transition-all hover:bg-wine-deep active:scale-95 disabled:opacity-60"
          >
            {uploading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ImagePlus className="h-4 w-4" />
            )}
            {uploading ? t.uploading : t.uploadPhoto}
          </button>
        </div>

        {photos.length === 0 && !uploading && (
          <p className="mt-12 text-sm italic text-muted-foreground">
            {t.memoriesEmpty}
          </p>
        )}
      </div>

      {/* Album overlay — every photo as a card */}
      {albumOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-noir/95 px-5 py-8 backdrop-blur-sm">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-medium italic text-gold">
                {t.allPhotosTitle}
              </h3>
              <button
                onClick={() => setAlbumOpen(false)}
                aria-label={t.close}
                className="rounded-full border border-ivory/20 p-2 text-ivory transition-colors hover:bg-ivory/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {photos.map((m) => (
                <div
                  key={m.id}
                  className="overflow-hidden rounded-2xl bg-ivory/5 ring-1 ring-ivory/10"
                >
                  {m.url && (
                    <img
                      src={m.url}
                      alt="A memory shared by a guest"
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
