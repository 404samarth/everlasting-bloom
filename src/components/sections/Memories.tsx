import { useEffect, useRef, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";
import { supabase } from "@/integrations/supabase/client";

interface Memory {
  id: string;
  image_path: string;
  caption: string | null;
}

function publicUrl(path: string) {
  const { data } = supabase.storage.from("memories").getPublicUrl(path);
  return data.publicUrl;
}

export function Memories({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [photos, setPhotos] = useState<Memory[]>([]);
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    supabase
      .from("memories")
      .select("id, image_path, caption, created_at")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error("[memories fetch]", error.message);
        if (data) setPhotos(data as Memory[]);
      });
  }, []);

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

      if (upErr) continue;

      const { data } = await supabase
        .from("memories")
        .insert({ image_path: path })
        .select("id, image_path, caption")
        .single();

      if (data) setPhotos((prev) => [data as Memory, ...prev]);
    }

    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

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

        {/* Scrolling photo row — shown above upload button when photos exist */}
        {photos.length > 0 && (
          <Reveal delay={160}>
            <div className="mt-10 -mx-6 overflow-x-auto scrollbar-none">
              <div className="flex gap-3 px-6 pb-2" style={{ width: "max-content" }}>
                {photos.map((m) => (
                  <div
                    key={m.id}
                    className="h-48 w-36 flex-shrink-0 overflow-hidden rounded-2xl ring-1 ring-border shadow-md transition-transform duration-500 hover:scale-105"
                  >
                    <img
                      src={publicUrl(m.image_path)}
                      alt="Guest memory"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Upload button */}
        <Reveal delay={220}>
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
            {uploading ? "Uploading..." : t.uploadPhoto}
          </button>
        </Reveal>

        {photos.length === 0 && !uploading && (
          <p className="mt-12 text-sm italic text-muted-foreground">
            {t.memoriesEmpty}
          </p>
        )}
      </div>
    </section>
  );
}
