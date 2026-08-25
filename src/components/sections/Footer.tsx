import { Heart } from "lucide-react";
import { wedding, ui, type Lang } from "@/data/wedding";

export function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  return (
    <footer className="bg-wine-deep px-6 py-14 text-center text-ivory">
      <p className="font-display text-3xl font-medium italic">
        {wedding.couple.groom.firstName}
        <Heart className="mx-2 inline h-5 w-5 fill-gold text-gold" />
        {wedding.couple.bride.firstName}
      </p>
      <p className="mt-3 text-[11px] uppercase tracking-[0.35em] text-ivory/60">
        {wedding.dateLong} · {wedding.city}
      </p>
      <p className="mt-2 text-xs tracking-[0.2em] text-gold/80">
        {wedding.hashtag}
      </p>
      <div className="gold-hairline mx-auto mt-8 w-24 opacity-60" />
      <p className="mt-6 text-xs italic text-ivory/50">{t.footerLine}</p>
    </footer>
  );
}
