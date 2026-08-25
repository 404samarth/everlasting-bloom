import { wedding, ui, type Lang } from "@/data/wedding";
import { useCountdown } from "@/hooks/use-countdown";
import { Reveal, SectionLabel, Particles } from "@/components/motion";

export function Countdown({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const c = useCountdown(wedding.weddingDateISO);

  const units = [
    { value: c.days, label: t.days },
    { value: c.hours, label: t.hours },
    { value: c.minutes, label: t.minutes },
    { value: c.seconds, label: t.seconds },
  ];

  return (
    <section className="relative overflow-hidden bg-noir px-6 py-24 text-ivory sm:py-32">
      <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/25 blur-3xl" />
      <Particles count={10} />

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <SectionLabel>
            {c.isPast ? wedding.dateLong : t.countdownLine}
          </SectionLabel>
        </Reveal>

        {c.isPast ? (
          <Reveal delay={150}>
            <h2 className="font-display mt-8 text-4xl font-medium italic leading-tight text-ivory sm:text-6xl">
              {wedding.postWedding.heading}
            </h2>
            <p className="font-display mx-auto mt-6 max-w-lg text-lg italic leading-relaxed text-ivory/75">
              {wedding.postWedding.message}
            </p>
          </Reveal>
        ) : (
          <>
            <Reveal delay={120}>
              <h2 className="font-display mt-6 text-3xl font-medium italic text-ivory/90 sm:text-4xl">
                {t.countdownTitle}
              </h2>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-12 grid grid-cols-4 gap-2 sm:gap-6">
                {units.map((u) => (
                  <div key={u.label} className="flex flex-col items-center">
                    <div className="flex w-full items-center justify-center rounded-2xl border border-gold/20 bg-ivory/5 py-6 backdrop-blur-sm sm:py-10">
                      <span
                        key={u.value}
                        className="animate-tick-pop font-display inline-block text-4xl font-medium tabular-nums text-gold sm:text-7xl"
                      >
                        {String(u.value).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="mt-3 text-[10px] uppercase tracking-[0.3em] text-ivory/60 sm:text-xs">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="font-display mt-10 text-lg italic text-ivory/70">
                {wedding.dateLong} · {wedding.city}
              </p>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
