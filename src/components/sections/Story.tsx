import { wedding, type Lang } from "@/data/wedding";
import { Reveal, SectionLabel } from "@/components/motion";

export function Story({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionLabel>{wedding.story.title[lang]}</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-6 text-center text-4xl font-medium leading-tight text-wine-deep sm:text-5xl">
            {wedding.couple.groom.firstName} & {wedding.couple.bride.firstName}
          </h2>
          <p className="font-display mx-auto mt-5 max-w-xl text-center text-xl italic leading-relaxed text-muted-foreground">
            {wedding.story.intro}
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* vertical gold line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent sm:left-1/2" />

          <div className="flex flex-col gap-14">
            {wedding.story.moments.map((m, i) => (
              <Reveal key={m.year} delay={i * 80}>
                <div
                  className={`relative flex gap-6 pl-12 sm:w-1/2 sm:pl-0 ${
                    i % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* node */}
                  <span
                    className={`absolute top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-background ${
                      i % 2 === 0
                        ? "left-0 sm:-right-4 sm:left-auto"
                        : "left-0 sm:-left-4"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-full bg-wine" />
                  </span>
                  <div>
                    <span className="font-display text-3xl font-medium italic text-gold-deep">
                      {m.year}
                    </span>
                    <h3 className="font-display mt-1 text-2xl font-medium text-wine">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
