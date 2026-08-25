import type { ReactNode } from "react";

/** Scroll-reveal wrapper — observed by useReveal. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/** Text that appears character-by-character (cinematic entrance). */
export function SplitText({
  text,
  className = "",
  delay = 0,
  step = 45,
}: {
  text: string;
  className?: string;
  delay?: number;
  step?: number;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className="char"
          style={{ animationDelay: `${delay + i * step}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}

/** Deterministic floating gold particles (no hydration mismatch). */
export function Particles({ count = 14 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 37 + 11) % 100;
        const delay = ((i * 13) % 70) / 10;
        const duration = 9 + (i % 5) * 2.5;
        const size = 2 + (i % 3) * 1.5;
        return (
          <span
            key={i}
            className="particle"
            style={{
              left: `${left}%`,
              bottom: "-3%",
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </>
  );
}

/** Small elegant section label: hairline — text — hairline. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="gold-hairline w-10" />
      <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-deep">
        {children}
      </span>
      <span className="gold-hairline w-10" />
    </div>
  );
}
