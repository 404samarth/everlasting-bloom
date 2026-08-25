import { useState } from "react";
import { Eye, Download, X } from "lucide-react";
import cardImg from "@/assets/card.jpg";
import { ui, wedding, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

export function WeddingCard({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-wine-deep px-6 py-24 text-ivory sm:py-32">
      <div className="animate-glow-pulse absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="animate-glow-pulse absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-wine/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <SectionLabel>{t.cardLine}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-center text-4xl font-medium text-ivory sm:text-5xl">
            {t.cardTitle}
          </h2>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-12 max-w-sm">
            <button
              onClick={() => setOpen(true)}
              className="group block w-full overflow-hidden rounded-xl shadow-[0_40px_90px_-30px] shadow-noir/80 ring-1 ring-gold/30 transition-transform duration-700 hover:-translate-y-2 hover:rotate-[0.5deg]"
              aria-label={t.viewCard}
            >
              <img
                src={cardImg}
                alt={`Wedding invitation — ${wedding.couple.groom.firstName} weds ${wedding.couple.bride.firstName}`}
                width={1024}
                height={1536}
                loading="lazy"
                className="w-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.03]"
              />
            </button>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium tracking-[0.1em] text-noir transition-all hover:brightness-110 active:scale-95"
              >
                <Eye className="h-4 w-4" /> {t.viewCard}
              </button>
              <a
                href={cardImg}
                download="wedding-invitation.jpg"
                className="flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3 text-sm tracking-[0.1em] text-ivory/90 transition-all hover:border-gold hover:text-gold active:scale-95"
              >
                <Download className="h-4 w-4" /> {t.downloadCard}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Full-screen invitation viewer */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-noir/95 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute right-5 top-5 rounded-full border border-ivory/25 p-2.5 text-ivory/80 transition-colors hover:text-gold"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={cardImg}
            alt="Wedding invitation"
            className="animate-fade-in max-h-[90svh] max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
