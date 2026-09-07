# Personal welcome + envelope opener before the main site

Right now, choosing "who are you?" drops the visitor straight into the website. We add two short cinematic beats in between.

## Beat 1 — Personalised welcome (about 3 seconds, auto-advances)

A dark, candle-lit screen that names the visitor's own role and side, in the same Hinglish/Hindi voice as the rest of the intro. Text appears letter by letter over drifting gold specks, with a thin gold hairline underneath.

- Line 1 (small, gold, uppercase, wide letter spacing): the chosen role, e.g. "Bride's Friend"
- Line 2 (large display serif): English/Hinglish — "Aapke liye ek khaas nimantran hai..." / Hindi — "आपके लिए एक ख़ास निमंत्रण है..."
- Line 3 (small, ivory, faded): "Saxena & Raghuwanshi parivaar ki taraf se" / "सक्सेना एवं रघुवंशी परिवार की ओर से"

## Beat 2 — Folded invitation envelope (waits for a tap)

A closed wine-coloured envelope, centred, with:
- a gold wax-seal medallion with the couple's initials (P ♥ A) that breathes gently
- gold foil corner filigree and a soft glow behind the envelope
- the visitor's role written on the envelope like a hand-addressed line: "For our dear Bride's Friend"
- a button below: "Open your invitation" / "अपना निमंत्रण खोलें"

Opening animation, one continuous sequence (about 2 seconds):
1. the wax seal cracks and fades, envelope lifts slightly
2. the top flap rotates open in 3D
3. the folded card slides up out of the envelope and unfolds, showing "Priyanka & Anand", the date and Burhanpur Palace in gold
4. a warm gold light bloom fills the screen, then fades into the main website

Tapping anywhere on the envelope works too, not just the button. Reduced-motion visitors see the same screens without the 3D motion, and the flow is skippable as today.

## Notes

- Both screens are part of the existing intro, so the main site still only appears after the invitation is opened, and the visitor's side/language choice is unchanged.
- All wording is added to the central content file in both languages so it stays editable.

## Technical detail

- `src/data/wedding.ts`: add an `opening.welcome` block (`titleEn/titleHi`, `fromLine`) and `opening.envelope` block (`addressPrefix`, `openLabel`, `unfoldNote`) per language.
- `src/components/Opening.tsx`: extend the scene machine from 7 to 9 scenes. Scene 7 = `SceneWelcome` (auto-advances after ~3s via the existing auto-advance `useEffect`), scene 8 = `SceneEnvelope`. `SceneRelation` no longer calls `onComplete`; it stores `{relation, side}` in local state and calls `go(7)`. `onComplete(lang, relation, side)` fires from the envelope's open sequence after the bloom (~1.9s), so `index.tsx` needs no change.
- `src/styles.css`: new keyframes `seal-crack`, `flap-open`, `card-rise`, `card-unfold`, `light-bloom` plus `@utility` wrappers; envelope built with `perspective`, `transform-style: preserve-3d`, `transform-origin: top`, and existing gold/wine tokens (no hardcoded colours). Add the new animations to the `prefers-reduced-motion` block.
