import { ChevronDown } from "lucide-react";
import coupleImg from "@/assets/couple.jpg";
import { wedding, ui, type Lang } from "@/data/wedding";
import { SplitText, Particles } from "@/components/motion";

export function Hero({ lang, isMarried }: { lang: Lang; isMarried: boolean }) {
  const t = ui[lang];
  const { bride, groom } = wedding.couple;

  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden bg-noir text-ivory">
      {/* Cinematic photo backdrop */}
      <div className="absolute inset-0">
        <img
          src={coupleImg}
          alt={`${groom.firstName} and ${bride.firstName}`}
          width={1024}
          height={1280}
          fetchPriority="high"
          className="animate-ken-burns h-full w-full object-cover object-top opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-noir/70 via-noir/25 to-noir" />
        <div className="vignette absolute inset-0" />
      </div>
      <Particles count={12} />

      {/* Content pinned to lower third — editorial style */}
      <div className="relative mt-auto flex flex-col items-center gap-5 px-6 pb-24 pt-40 text-center">
        {isMarried ? (
          <>
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-gold">
              {wedding.dateLong}
            </p>
            <h1 className="font-display text-[clamp(2.4rem,11vw,5.5rem)] font-medium leading-[1.05]">
              <SplitText text={wedding.postWedding.heading} step={28} />
            </h1>
            <p
              className="animate-fade-up max-w-md font-display text-lg italic leading-relaxed text-ivory/80"
              style={{ animationDelay: "900ms" }}
            >
              {wedding.postWedding.message}
            </p>
          </>
        ) : (
          <>
            <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-gold">
              {wedding.hero.sub}
            </p>
            <h1 className="font-display text-[clamp(3rem,15vw,7rem)] font-medium leading-[0.95]">
              <SplitText text={groom.firstName} step={55} delay={200} />
              <span className="mx-3 inline-block align-middle font-display text-[0.45em] italic text-gold">
                <SplitText text="weds" step={60} delay={700} />
              </span>
              <SplitText text={bride.firstName} step={55} delay={900} />
            </h1>
            <p
              className="animate-fade-up font-display max-w-md text-lg italic leading-relaxed text-ivory/85"
              style={{ animationDelay: "1500ms" }}
            >
              {wedding.hero.line}
            </p>
            <p
              className="animate-fade-up text-sm uppercase tracking-[0.3em] text-gold"
              style={{ animationDelay: "1800ms" }}
            >
              {wedding.dateLong} · {wedding.city}
            </p>
          </>
        )}
      </div>

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-ivory/50">
        <span className="text-[10px] uppercase tracking-[0.35em]">
          {t.scrollDown}
        </span>
        <ChevronDown className="animate-scroll-cue h-4 w-4" />
      </div>
    </section>
  );
}
