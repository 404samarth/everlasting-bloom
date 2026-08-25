import { useEffect, useState, type FormEvent } from "react";
import { Heart, Send } from "lucide-react";
import { wedding, ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

interface Blessing {
  name: string;
  relation: string;
  message: string;
}

const STORAGE_KEY = "wd_blessings";

function loadBlessings(): Blessing[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Blessing[]) : [];
  } catch {
    return [];
  }
}

export function Blessings({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [guest, setGuest] = useState<Blessing[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => setGuest(loadBlessings()), []);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const b: Blessing = {
      name: String(fd.get("name") || "").trim(),
      relation: String(fd.get("relation") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };
    if (!b.name || !b.message) return;
    const next = [b, ...guest];
    setGuest(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage full — blessing still shows this session */
    }
    e.currentTarget.reset();
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  const all = [...guest, ...wedding.testimonials];

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>{t.blessingsLine}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-center text-4xl font-medium text-wine-deep sm:text-5xl">
            {t.blessingsTitle}
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="mt-14 columns-1 gap-5 sm:columns-2">
          {all.map((b, i) => (
            <div key={`${b.name}-${i}`} className="mb-5 break-inside-avoid">
              <Reveal delay={Math.min(i, 4) * 70}>
                <blockquote className="rounded-2xl bg-card p-6 shadow-[0_16px_44px_-26px] shadow-wine/25 ring-1 ring-border">
                  <Heart className="h-4 w-4 fill-wine text-wine" />
                  <p className="font-display mt-3 text-lg italic leading-relaxed text-foreground/85">
                    “{b.message}”
                  </p>
                  <footer className="mt-4">
                    <div className="gold-hairline w-12" />
                    <p className="mt-3 text-sm font-medium text-wine">
                      {b.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {b.relation}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Form */}
        <Reveal delay={150}>
          <form
            onSubmit={submit}
            className="mt-14 rounded-3xl bg-wine-deep p-7 text-ivory shadow-[0_30px_80px_-30px] shadow-wine/50 sm:p-10"
          >
            <h3 className="font-display text-3xl font-medium italic text-gold">
              {t.leaveBlessing}
            </h3>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <input
                name="name"
                required
                placeholder={t.yourName}
                className="rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
              />
              <input
                name="relation"
                placeholder={t.yourRelation}
                className="rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.yourMessage}
                className="rounded-xl border border-ivory/15 bg-ivory/5 px-4 py-3.5 text-sm text-ivory placeholder:text-ivory/40 focus:border-gold focus:outline-none sm:col-span-2"
              />
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-medium tracking-[0.1em] text-noir transition-all hover:brightness-110 active:scale-95"
              >
                <Send className="h-4 w-4" /> {t.sendBlessing}
              </button>
              {sent && (
                <span className="animate-fade-up font-display text-base italic text-gold">
                  {t.blessingThanks}
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
