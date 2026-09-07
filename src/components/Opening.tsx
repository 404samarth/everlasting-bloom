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
    const t = window.setTimeout(() => go(6), 2600);
    return () => window.clearTimeout(t);
  }, [saidNo, go]);

  const chooseLang = (l: Lang) => {
    setLang(l);
    go(4);
  };

  const finish = (relation: string, side: Side) => onComplete(lang, relation, side);
  const skip = () => go(6);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-noir text-ivory">
      {leaving !== null && (
        <div key={`out-${leaving}`} className="scene-exit absolute inset-0">
          <SceneBody
            scene={leaving}
            lang={lang}
            saidNo={saidNo}
            onLang={chooseLang}
            onYes={() => go(6)}
            onNo={() => setSaidNo(true)}
            onRelation={finish}
          />
        </div>
      )}
      <div key={`in-${scene}`} className="scene-enter absolute inset-0">
        <SceneBody
          scene={scene}
          lang={lang}
          saidNo={saidNo}
          onLang={chooseLang}
          onYes={() => go(6)}
          onNo={() => setSaidNo(true)}
          onRelation={finish}
        />
      </div>

      {scene >= 1 && (
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
  onLang,
  onYes,
  onNo,
  onRelation,
}: {
  scene: number;
  lang: Lang;
  saidNo: boolean;
  onLang: (l: Lang) => void;
  onYes: () => void;
  onNo: () => void;
  onRelation: (label: string, side: Side) => void;
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
