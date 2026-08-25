import { Instagram } from "lucide-react";
import { wedding, type Lang } from "@/data/wedding";
import { Reveal, Particles } from "@/components/motion";

export function InstagramSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden bg-noir px-6 py-24 text-center text-ivory sm:py-32">
      <div className="animate-glow-pulse absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-wine/30 blur-3xl" />
      <Particles count={8} />

      <div className="relative mx-auto max-w-xl">
        <Reveal>
          <span className="font-display text-2xl italic text-gold">
            {wedding.hashtag}
          </span>
          <h2 className="font-display mt-4 text-4xl font-medium sm:text-5xl">
            {wedding.instagram.title[lang]}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-sm leading-relaxed text-ivory/70 sm:text-base">
            {wedding.instagram.text}
          </p>
        </Reveal>
        <Reveal delay={280}>
          <a
            href={wedding.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-wine via-wine-deep to-noir px-8 py-4 text-sm font-medium tracking-[0.12em] text-ivory ring-1 ring-gold/40 transition-all hover:ring-gold active:scale-95"
          >
            <Instagram className="h-5 w-5 text-gold" />
            Join Us on Instagram
          </a>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] text-ivory/45">
            {wedding.instagramHandle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
