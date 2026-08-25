import { useEffect, useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import { ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

const STORAGE_KEY = "wd_memories";

function loadMemories(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

/** Downscale to keep localStorage light. */
function fileToThumb(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const max = 900;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d")?.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL("image/jpeg", 0.78));
    };
    img.onerror = reject;
    img.src = url;
  });
}

export function Memories({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [photos, setPhotos] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setPhotos(loadMemories()), []);

  const onFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    const thumbs: string[] = [];
    for (const f of Array.from(files).slice(0, 6)) {
      if (f.type.startsWith("image/")) thumbs.push(await fileToThumb(f));
    }
    const next = [...thumbs, ...photos].slice(0, 24);
    setPhotos(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* quota — keep in-session only */
    }
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
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-wine px-8 py-4 text-sm font-medium tracking-[0.12em] text-ivory shadow-[0_16px_40px_-14px] shadow-wine/60 transition-all hover:bg-wine-deep active:scale-95"
          >
            <ImagePlus className="h-4 w-4" /> {t.uploadPhoto}
          </button>
        </Reveal>

        {photos.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((src, i) => (
              <div
                key={i}
                className="animate-fade-up aspect-square overflow-hidden rounded-xl ring-1 ring-border"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <img
                  src={src}
                  alt="Guest memory"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-12 text-sm italic text-muted-foreground">
            {t.memoriesEmpty}
          </p>
        )}
      </div>
    </section>
  );
}
