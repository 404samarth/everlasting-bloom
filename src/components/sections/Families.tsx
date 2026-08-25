import familyBride from "@/assets/family-bride.jpg";
import familyGroom from "@/assets/family-groom.jpg";
import { wedding, ui, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

const photos = { bride: familyBride, groom: familyGroom } as const;

export function Families({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const families = [
    { key: "bride" as const, ...wedding.families.bride },
    { key: "groom" as const, ...wedding.families.groom },
  ];

  return (
    <section className="bg-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>{t.familiesLine}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-center text-4xl font-medium text-wine-deep sm:text-5xl">
            {t.familiesTitle}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {families.map((f, i) => (
            <Reveal key={f.key} delay={i * 150}>
              <article className="group overflow-hidden rounded-2xl bg-card shadow-[0_24px_60px_-30px] shadow-wine/25 ring-1 ring-border">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={photos[f.key]}
                    alt={f.name}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.3em] text-ivory/90">
                    {f.side[lang]}
                  </span>
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-2xl font-medium text-wine">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold-deep">
                    {f.members}
                  </p>
                  <div className="gold-hairline my-4 w-16" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {f.intro}
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
