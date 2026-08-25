import inviteBg from "@/assets/invite-bg.jpg";
import { wedding } from "@/data/wedding";
import { Reveal, Particles } from "@/components/motion";

/**
 * The family's personal invitation — the emotional centerpiece.
 * Full-bleed silk texture, cinematic light, large serif type.
 */
export function Invitation() {
  const inv = wedding.invitation;

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-6 py-28 text-center text-ivory">
      <div className="absolute inset-0">
        <img
          src={inviteBg}
          alt=""
          width={1280}
          height={1600}
          loading="lazy"
          className="animate-ken-burns h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-noir/55" />
        <div className="vignette absolute inset-0" />
      </div>
      <Particles count={12} />

      <div className="relative mx-auto max-w-2xl">
        <Reveal>
          <span className="font-display text-5xl italic text-gold">॥</span>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-display mt-6 text-4xl font-medium leading-[1.15] sm:text-5xl">
            {inv.heading}
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="font-display mt-4 text-2xl font-medium italic leading-snug text-gold sm:text-3xl">
            {inv.sub}
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="gold-hairline mx-auto mt-10 w-24" />
          <p className="mt-10 text-base leading-loose text-ivory/85 sm:text-lg">
            {inv.message}
          </p>
        </Reveal>
        <Reveal delay={600}>
          <p className="font-display mt-10 text-xl italic text-gold">
            {inv.sign}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
