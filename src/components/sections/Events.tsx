import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import { wedding, ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

export function Events({ lang }: { lang: Lang }) {
  const t = ui[lang];

  return (
    <section className="bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>{t.eventsLine}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-center text-4xl font-medium text-wine-deep sm:text-5xl">
            {t.eventsTitle}
          </h2>
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {wedding.events.map((e, i) => (
            <Reveal key={e.name} delay={i * 70}>
              <article className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-[0_18px_50px_-28px] shadow-wine/25 ring-1 ring-border transition-all hover:shadow-wine/40 sm:p-8">
                <span className="font-display pointer-events-none absolute -right-2 -top-6 text-8xl font-semibold italic text-wine/5 transition-colors group-hover:text-wine/10">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl font-medium text-wine">
                      {e.name}
                    </h3>
                    <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.2em] text-gold-deep">
                      {e.date}
                    </span>
                  </div>

                  <div className="gold-hairline my-4 w-20" />

                  <div className="grid gap-2.5 text-sm text-muted-foreground sm:grid-cols-2">
                    <span className="flex items-center gap-2.5">
                      <Clock className="h-4 w-4 shrink-0 text-wine/70" />
                      {e.time}
                    </span>
                    <span className="flex items-center gap-2.5">
                      <MapPin className="h-4 w-4 shrink-0 text-wine/70" />
                      {e.venue}
                    </span>
                    <span className="flex items-center gap-2.5">
                      <Sparkles className="h-4 w-4 shrink-0 text-wine/70" />
                      {e.dress}
                    </span>
                    <span className="flex items-center gap-2.5">
                      <CalendarDays className="h-4 w-4 shrink-0 text-wine/70" />
                      {e.date}
                    </span>
                  </div>

                  <p className="font-display mt-4 text-base italic leading-relaxed text-foreground/80">
                    {e.note}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
