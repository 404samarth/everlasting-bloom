import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { OpeningExperience } from "@/components/Opening";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Families } from "@/components/sections/Families";
import { Countdown } from "@/components/sections/Countdown";
import { Events } from "@/components/sections/Events";
import { WeddingCard } from "@/components/sections/WeddingCard";
import { Invitation } from "@/components/sections/Invitation";
import { Blessings } from "@/components/sections/Blessings";
import { Memories } from "@/components/sections/Memories";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Footer } from "@/components/sections/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { wedding, type Lang, type Side } from "@/data/wedding";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: `${wedding.couple.groom.firstName} & ${wedding.couple.bride.firstName} — ${wedding.dateShort}`,
      },
      {
        name: "description",
        content: `Do dil, ek kahaani. Join us as ${wedding.couple.groom.firstName} & ${wedding.couple.bride.firstName} begin forever — ${wedding.dateLong}, ${wedding.city}.`,
      },
      {
        property: "og:title",
        content: `${wedding.couple.groom.firstName} & ${wedding.couple.bride.firstName} — A Wedding Celebration`,
      },
      {
        property: "og:description",
        content: `Something special is coming... ${wedding.dateLong}, ${wedding.city}. Open to begin the experience.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [started, setStarted] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [relation, setRelation] = useState<string | null>(null);
  const [side, setSide] = useState<Side>("bride");

  useEffect(() => {
    // The cinematic intro plays on every visit — clear any older saved flag.
    try {
      localStorage.removeItem("wd_intro");
      const l = localStorage.getItem("wd_lang");
      if (l === "en" || l === "hi") setLang(l);
      setRelation(localStorage.getItem("wd_relation"));
    } catch {
      /* private mode — show intro */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = started ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [started]);

  const complete = (l: Lang, r: string, s: Side) => {
    setLang(l);
    setRelation(r);
    setSide(s);
    setStarted(true);
    try {
      localStorage.setItem("wd_lang", l);
      localStorage.setItem("wd_relation", r);
      localStorage.setItem("wd_side", s);
    } catch {
      /* ignore */
    }
  };

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "hi" : "en";
    setLang(next);
    try {
      localStorage.setItem("wd_lang", next);
    } catch {
      /* ignore */
    }
  };

  const revealRef = useReveal<HTMLDivElement>(started);
  const isMarried = Date.now() > new Date(wedding.weddingDateISO).getTime();

  return (
    <>
      {hydrated && !started && <OpeningExperience onComplete={complete} />}

      {started && (
        <div ref={revealRef} className="animate-fade-in">
          <SiteHeader lang={lang} onToggleLang={toggleLang} />
          <main>
            <Hero lang={lang} isMarried={isMarried} />
            <Story lang={lang} />
            <Families lang={lang} />
            <Countdown lang={lang} />
            <Events lang={lang} />
            <WeddingCard lang={lang} />
            <Invitation />
            <Blessings lang={lang} />
            <Memories lang={lang} />
            <InstagramSection lang={lang} />
            <Footer lang={lang} />
          </main>
        </div>
      )}
    </>
  );
}

function SiteHeader({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-noir/55 px-5 py-3.5 text-ivory backdrop-blur-md">
      <span className="font-display text-lg font-medium italic tracking-wide">
        {wedding.couple.groom.firstName[0]}
        <Heart className="mx-1 inline h-3 w-3 fill-gold text-gold" />
        {wedding.couple.bride.firstName[0]}
      </span>
      <div className="flex items-center gap-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/60">
          {wedding.dateShort}
        </span>
        <button
          onClick={onToggleLang}
          className="rounded-full border border-ivory/25 px-3.5 py-1.5 text-[11px] tracking-[0.15em] text-ivory/85 transition-colors hover:border-gold hover:text-gold"
        >
          {lang === "en" ? "हिंदी" : "EN"}
        </button>
      </div>
    </header>
  );
}
