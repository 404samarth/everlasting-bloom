import { useCallback, useEffect, useState } from "react";
import { Heart, Eye } from "lucide-react";
import ganeshImg from "@/assets/ganesh.jpg";
import coupleImg from "@/assets/couple.jpg";
import { wedding, type Lang, type Side } from "@/data/wedding";
import { Particles, SplitText } from "@/components/motion";

/**
 * The cinematic suspense opening.
 * Scenes: black "Wait..." → Ganesh Ji → suspense lines → blurred couple +
 * language choice → partial reveal → date mystery → relationship pick.
 */
export function OpeningExperience({
  onComplete,
}: {
  onComplete: (lang: Lang, relation: string, side: Side) => void;
}) {
  const [scene, setScene] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [saidNo, setSaidNo] = useState(false);
  const [guest, setGuest] = useState<{ relation: string; side: Side } | null>(
    null,
  );

  const go = useCallback(
    (next: number) => {
      setLeaving(scene);
      setScene(next);
      window.setTimeout(() => setLeaving(null), 450);
    },
    [scene],
  );

  // Auto-advancing scenes
  useEffect(() => {
    let t: number | undefined;
    if (scene === 0) t = window.setTimeout(() => go(1), 2600);
    else if (scene === 1) t = window.setTimeout(() => go(2), 3600);
    else if (scene === 2) t = window.setTimeout(() => go(3), 5400);
    else if (scene === 4) t = window.setTimeout(() => go(5), 3000);
    else if (scene === 7) t = window.setTimeout(() => go(8), 3200);
    return () => window.clearTimeout(t);
  }, [scene, go]);

  // "No" on the date question → playful line → continue
  useEffect(() => {
    if (!saidNo) return;
    const t = window.setTimeout(() => {
      setSaidNo(false);
      go(6);
    }, 2600);
    return () => window.clearTimeout(t);
  }, [saidNo, go]);

  const chooseLang = (l: Lang) => {
    setLang(l);
    go(4);
  };

  const pickRelation = (relation: string, side: Side) => {
    setGuest({ relation, side });
    go(7);
  };

  const finish = () => {
    if (guest) onComplete(lang, guest.relation, guest.side);
  };
  const skip = () => go(6);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-noir text-ivory">
      {leaving !== null && (
        <div key={`out-${leaving}`} className="scene-exit absolute inset-0">
          <SceneBody
            scene={leaving}
            lang={lang}
            saidNo={saidNo}
            guest={guest}
            onLang={chooseLang}
            onYes={() => go(6)}
            onNo={() => setSaidNo(true)}
            onRelation={pickRelation}
            onOpened={finish}
          />
        </div>
      )}
      <div key={`in-${scene}`} className="scene-enter absolute inset-0">
        <SceneBody
          scene={scene}
          lang={lang}
          saidNo={saidNo}
          guest={guest}
          onLang={chooseLang}
          onYes={() => go(6)}
          onNo={() => setSaidNo(true)}
          onRelation={pickRelation}
          onOpened={finish}
        />
      </div>

      {scene >= 1 && scene < 8 && (
        <button
          onClick={skip}
          className="absolute bottom-5 right-5 z-10 text-[11px] uppercase tracking-[0.3em] text-ivory/40 transition-colors hover:text-ivory/80"
        >
          Skip intro
        </button>
      )}
    </div>
  );
}

function SceneBody({
  scene,
  lang,
  saidNo,
  guest,
  onLang,
  onYes,
  onNo,
  onRelation,
  onOpened,
}: {
  scene: number;
  lang: Lang;
  saidNo: boolean;
  guest: { relation: string; side: Side } | null;
  onLang: (l: Lang) => void;
  onYes: () => void;
  onNo: () => void;
  onRelation: (label: string, side: Side) => void;
  onOpened: () => void;
}) {
  switch (scene) {
    case 0:
      return <SceneWait />;
    case 1:
      return <SceneGanesh />;
    case 2:
      return <SceneSuspense />;
    case 3:
      return <SceneLanguage onLang={onLang} />;
    case 4:
      return <SceneReveal />;
    case 5:
      return <SceneDate saidNo={saidNo} onYes={onYes} onNo={onNo} />;
    case 6:
      return <SceneRelation lang={lang} onRelation={onRelation} />;
    case 7:
      return <SceneWelcome lang={lang} relation={guest?.relation ?? ""} />;
    case 8:
      return (
        <SceneEnvelope
          lang={lang}
          relation={guest?.relation ?? ""}
          onOpened={onOpened}
        />
      );
    default:
      return null;
  }
}

/* Scene 1 — premium black "Wait..." */
function SceneWait() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      {/* soft moving light + vignette + particles */}
      <div className="animate-light-sweep absolute -inset-1/4 bg-[radial-gradient(ellipse_40%_55%_at_50%_45%,oklch(0.3_0.05_30/0.5),transparent_70%)]" />
      <div className="animate-glow-pulse absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="vignette absolute inset-0" />
      <Particles count={10} />
      <h1 className="font-display relative text-5xl font-medium italic tracking-wide text-ivory/90 sm:text-6xl">
        <SplitText text="Wait..." step={130} />
      </h1>
    </div>
  );
}

/* Scene 2 — Ganesh Ji */
function SceneGanesh() {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={ganeshImg}
        alt="Shri Ganesh"
        width={1024}
        height={1280}
        className="animate-ken-burns h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/60" />
      <div className="vignette absolute inset-0" />
      <div className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-3">
        <span className="gold-hairline w-16" />
        <p
          className="animate-fade-up font-display text-lg tracking-[0.25em] text-gold"
          style={{ animationDelay: "600ms" }}
        >
          ॥ श्री गणेशाय नमः ॥
        </p>
      </div>
    </div>
  );
}

/* Scene 3 — suspense lines */
function SceneSuspense() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden px-8 text-center">
      <div className="animate-light-sweep absolute -inset-1/4 bg-[radial-gradient(ellipse_45%_50%_at_60%_40%,oklch(0.28_0.06_15/0.55),transparent_70%)]" />
      <div className="vignette absolute inset-0" />
      <Particles count={8} />
      <p className="animate-fade-up font-display relative text-2xl font-medium italic text-ivory/85 sm:text-3xl">
        Bas thoda sa wait...
      </p>
      <p
        className="animate-fade-up font-display relative text-3xl font-medium leading-snug text-ivory sm:text-4xl"
        style={{ animationDelay: "1800ms" }}
      >
        Kyuki jo aage hai...
        <span className="mt-2 block italic text-gold">
          woh aap soch bhi nahi rahe.
        </span>
      </p>
    </div>
  );
}

/* Scene 4 — blurred couple + language choice */
function SceneLanguage({ onLang }: { onLang: (l: Lang) => void }) {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={coupleImg}
        alt=""
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
      />
      <div className="absolute inset-0 bg-noir/55" />
      <div className="vignette absolute inset-0" />
      <div className="relative flex h-full flex-col items-center justify-center gap-8 px-8 text-center">
        <p className="animate-fade-up font-display text-xl italic text-ivory/70">
          Before we begin...
        </p>
        <p
          className="animate-fade-up font-display text-3xl font-medium text-ivory sm:text-4xl"
          style={{ animationDelay: "150ms" }}
        >
          Ek chhoti si choice...
        </p>
        <div
          className="animate-fade-up flex items-center gap-4"
          style={{ animationDelay: "350ms" }}
        >
          <button
            onClick={() => onLang("en")}
            className="min-w-32 rounded-full border border-gold/50 bg-noir/40 px-8 py-3.5 text-sm tracking-[0.2em] text-gold backdrop-blur-sm transition-all hover:bg-gold hover:text-noir active:scale-95"
          >
            English
          </button>
          <span className="font-display text-xl italic text-ivory/50">|</span>
          <button
            onClick={() => onLang("hi")}
            className="min-w-32 rounded-full border border-gold/50 bg-noir/40 px-8 py-3.5 text-base tracking-wide text-gold backdrop-blur-sm transition-all hover:bg-gold hover:text-noir active:scale-95"
          >
            हिंदी
          </button>
        </div>
      </div>
    </div>
  );
}

/* Scene 5 — the 30% reveal */
function SceneReveal() {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={coupleImg}
        alt=""
        width={1024}
        height={1280}
        className="blur-stage h-full w-full scale-105 object-cover blur-md brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/90 via-transparent to-noir/50" />
      <div className="absolute inset-x-0 bottom-16 flex flex-col items-center gap-3 px-6 text-center">
        <p className="animate-fade-up font-display text-2xl italic text-ivory/90 sm:text-3xl">
          Kaun hai yeh dono?
        </p>
        <p
          className="animate-fade-up font-display text-3xl font-medium text-gold sm:text-4xl"
          style={{ animationDelay: "400ms" }}
        >
          {wedding.couple.bride.firstName} & {wedding.couple.groom.firstName}
        </p>
        <p
          className="animate-fade-up text-xs uppercase tracking-[0.35em] text-gold/80"
          style={{ animationDelay: "800ms" }}
        >
          Keep watching
        </p>
      </div>
    </div>
  );
}

/* Scene 6 — the date mystery */
function SceneDate({
  saidNo,
  onYes,
  onNo,
}: {
  saidNo: boolean;
  onYes: () => void;
  onNo: () => void;
}) {
  return (
    <div className="relative h-full overflow-hidden">
      <img
        src={coupleImg}
        alt=""
        width={1024}
        height={1280}
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-lg brightness-75"
      />
      <div className="absolute inset-0 bg-noir/60" />
      <div className="relative flex h-full flex-col items-center justify-center gap-9 px-8 text-center">
        {!saidNo ? (
          <>
            <p className="animate-fade-up font-display text-3xl font-medium leading-snug text-ivory sm:text-4xl">
              {wedding.opening.dateQuestion}
            </p>
            <div
              className="animate-fade-up flex items-center gap-4"
              style={{ animationDelay: "700ms" }}
            >
              <button
                onClick={onYes}
                className="flex min-w-28 items-center justify-center gap-2 rounded-full bg-wine px-7 py-3.5 text-sm tracking-[0.15em] text-ivory shadow-[0_10px_40px_-10px] shadow-wine/70 transition-all hover:bg-wine-deep active:scale-95"
              >
                Yes <Heart className="h-4 w-4 fill-current" />
              </button>
              <button
                onClick={onNo}
                className="flex min-w-28 items-center justify-center gap-2 rounded-full border border-ivory/30 px-7 py-3.5 text-sm tracking-[0.15em] text-ivory/85 transition-all hover:border-gold hover:text-gold active:scale-95"
              >
                No <Eye className="h-4 w-4" />
              </button>
            </div>
          </>
        ) : (
          <p className="animate-fade-up font-display max-w-sm text-2xl font-medium italic leading-snug text-gold sm:text-3xl">
            {wedding.opening.noResponse}
          </p>
        )}
      </div>
    </div>
  );
}

/* Scene 7 — relationship selection */
function SceneRelation({
  lang,
  onRelation,
}: {
  lang: Lang;
  onRelation: (label: string, side: Side) => void;
}) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-8 overflow-hidden px-6">
      <div className="animate-light-sweep absolute -inset-1/4 bg-[radial-gradient(ellipse_45%_50%_at_50%_35%,oklch(0.3_0.08_15/0.5),transparent_70%)]" />
      <div className="vignette absolute inset-0" />
      <Particles count={8} />
      <p className="animate-fade-up font-display relative max-w-md text-center text-3xl font-medium leading-snug text-ivory sm:text-4xl">
        {lang === "hi"
          ? "अच्छा... तो आप इनके लिए कौन हैं?"
          : "Achha... toh aap inke liye kaun hain?"}
      </p>
      <div className="relative flex w-full max-w-xs flex-col gap-3">
        {wedding.opening.relations.map((r, i) => (
          <button
            key={r.label}
            onClick={() => onRelation(r.label, r.side)}
            className="animate-fade-up group flex items-center justify-between rounded-xl border border-ivory/15 bg-ivory/5 px-5 py-3.5 text-left text-sm tracking-[0.12em] text-ivory/85 backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-wine/40 hover:text-ivory active:scale-[0.98]"
            style={{ animationDelay: `${400 + i * 130}ms` }}
          >
            {r.label}
            <span className="h-1.5 w-1.5 rounded-full bg-gold/60 transition-all group-hover:scale-150 group-hover:bg-gold" />
          </button>
        ))}
      </div>
    </div>
  );
}

/* Scene 8 — personalised welcome beat */
function SceneWelcome({
  lang,
  relation,
}: {
  lang: Lang;
  relation: string;
}) {
  const t = wedding.opening.welcome[lang];
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-6 overflow-hidden px-7 text-center">
      <div className="animate-light-sweep absolute -inset-1/4 bg-[radial-gradient(ellipse_45%_50%_at_50%_45%,oklch(0.32_0.08_18/0.55),transparent_70%)]" />
      <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="vignette absolute inset-0" />
      <Particles count={10} />

      <p className="animate-fade-up relative text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
        {relation}
      </p>
      <h2 className="font-display relative max-w-md text-3xl font-medium leading-snug text-ivory sm:text-4xl">
        <SplitText text={t.title} delay={200} step={34} />
      </h2>
      <span className="gold-hairline animate-fade-in relative w-24" />
      <p
        className="animate-fade-up relative text-xs tracking-[0.22em] text-ivory/55"
        style={{ animationDelay: "1100ms" }}
      >
        {t.fromLine}
      </p>
    </div>
  );
}

/* Scene 9 — personalised wedding invitation */
function SceneEnvelope({
  lang,
  relation,
  onOpened,
}: {
  lang: Lang;
  relation: string;
  onOpened: () => void;
}) {
  const t = wedding.opening.envelope[lang];
  const [opening, setOpening] = useState(false);
  const relationName = relation.replace(/^[👰🤵]\s*/u, "");
  const isFamily = /family/i.test(relationName);

  useEffect(() => {
    if (!opening) return;
    const timer = window.setTimeout(onOpened, 2000);
    return () => window.clearTimeout(timer);
  }, [opening, onOpened]);

  const open = () => {
    if (!opening) setOpening(true);
  };

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden px-5 py-6">
      <div className="animate-light-sweep absolute -inset-1/4 bg-[radial-gradient(ellipse_50%_50%_at_50%_45%,oklch(0.34_0.09_16/0.6),transparent_72%)]" />
      <div className="animate-glow-pulse absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/12 blur-3xl" />
      <div className="vignette absolute inset-0" />
      <Particles count={10} />

      <article
        className={`relative flex h-[65svh] max-h-[590px] min-h-[500px] w-full max-w-[340px] flex-col items-center overflow-hidden rounded-sm border border-gold/45 bg-cream px-7 py-6 text-center shadow-[0_36px_90px_-22px] shadow-noir ${opening ? "animate-card-unfold origin-center" : "animate-fade-up"}`}
      >
        <span className="pointer-events-none absolute inset-2 border border-gold/25" />
        <span className="pointer-events-none absolute left-4 top-4 h-10 w-10 rounded-tl border-l border-t border-gold/60" />
        <span className="pointer-events-none absolute right-4 top-4 h-10 w-10 rounded-tr border-r border-t border-gold/60" />
        <span className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 rounded-bl border-b border-l border-gold/60" />
        <span className="pointer-events-none absolute bottom-4 right-4 h-10 w-10 rounded-br border-b border-r border-gold/60" />

        <div className="relative flex h-full w-full flex-col items-center">
          <svg
            viewBox="0 0 64 64"
            aria-label="Shri Ganesh line art"
            className="h-10 w-10 fill-none stroke-gold-deep stroke-[1.4]"
          >
            <path d="M32 8c-8 0-14 6-14 13 0 5 3 8 7 10-4 2-7 6-7 11 0 8 7 14 15 14 7 0 13-4 15-10M25 22c0-5 3-9 8-9 6 0 10 5 10 11 0 7-5 10-9 13-4 3-5 8-2 11 2 2 6 1 8-2M19 20c-5-1-9 2-10 7 5 1 9-1 12-5M43 20c5-1 9 2 10 7-5 1-9-1-12-5M26 27h.1M39 27h.1M28 34c3 2 6 2 9 0" />
          </svg>
          <p className="mt-1 text-[8px] tracking-[0.18em] text-gold-deep">
            {t.sacredLine}
          </p>

          <span className="gold-hairline mt-4 block w-20" />
          <p className="mt-5 text-[9px] uppercase tracking-[0.28em] text-wine/65">
            Wedding Invitation
          </p>

          <h2 className="font-display mt-3 text-[2.15rem] font-medium leading-none text-wine-deep">
            {wedding.couple.groom.firstName}
          </h2>
          <p className="font-display my-1 text-sm italic text-gold-deep">weds</p>
          <h2 className="font-display text-[2.15rem] font-medium leading-none text-wine-deep">
            {wedding.couple.bride.firstName}
          </h2>

          <div className="my-4 flex w-full items-center gap-3">
            <span className="h-px flex-1 bg-gold/35" />
            <Heart className="h-3 w-3 fill-gold-deep text-gold-deep" />
            <span className="h-px flex-1 bg-gold/35" />
          </div>

          <p className="font-display text-xl font-medium text-wine-deep">
            19 November 2026
          </p>
          <p className="mt-1 max-w-[230px] text-[9px] uppercase leading-relaxed tracking-[0.16em] text-wine/60">
            {wedding.venue}
          </p>

          <div className="mt-auto max-w-[245px] text-wine-deep">
            <p className="font-display text-base italic leading-snug">
              {t.addressPrefix}
            </p>
            <p className="font-display mt-0.5 text-xl font-semibold leading-snug text-wine">
              {relationName}
            </p>
            {isFamily && (
              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gold-deep">
                {t.familySuffix}
              </p>
            )}
          </div>
        </div>
      </article>

      {!opening ? (
        <div className="relative mt-5 flex flex-col items-center">
          <button
            onClick={open}
            className="animate-fade-up rounded-full bg-gold px-9 py-3.5 text-sm font-medium tracking-[0.14em] text-noir shadow-[0_18px_50px_-18px] shadow-gold/60 transition-all hover:brightness-110 active:scale-95"
          >
            {t.openLabel}
          </button>
        </div>
      ) : (
        <div className="h-[48px]" />
      )}

      {opening && (
        <div className="animate-light-bloom pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.95_0.06_88)_0%,oklch(0.9_0.08_86)_55%,oklch(0.86_0.09_84)_100%)]" />
      )}
    </div>
  );
}
