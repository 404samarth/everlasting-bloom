# Side-separated blessings and memories

Guests pick who they are at the end of the intro. From now on, that choice decides which blessings and photos they see: bride-side guests see only what bride-side guests shared, groom-side guests see only groom-side content.

## Intro change

The relation choices become clearly one side each:

- Bride Family
- Bride Friend
- Bride's Relative
- Groom Family
- Groom Friend
- Groom's Relative

Each choice maps to a side: bride or groom.

## Blessings

- A new blessing is saved with the sender's side.
- The wall shows only blessings from the visitor's own side.
- The sample/testimonial cards written into the site content are also split by side and shown accordingly.

## Memories

- An uploaded photo is saved with the uploader's side.
- The scrolling row, the photo count, and the full album only include photos from the visitor's own side.

## Existing data

All current blessings and uploaded photos are deleted, so the wall starts clean with side-tagged content only.

## Technical notes

- Migration: add `side text not null` (check constraint `'bride' | 'groom'`) to `public.blessings` and `public.memories`; delete all existing rows first; update the anon/authenticated insert policies to require a valid `side`; keep read policies public (filtering happens per query).
- `src/data/wedding.ts`: replace `opening.relations` with objects `{ label, side }`; tag each testimonial with a side.
- `src/components/Opening.tsx`: relation buttons render `label` and pass the full choice through `onComplete`.
- `src/routes/index.tsx`: store `wd_relation` plus a derived `wd_side`; pass `side` down to `Blessings` and `Memories`.
- `Blessings.tsx` / `Memories.tsx`: add `.eq("side", side)` to selects, include `side` on inserts, and filter local testimonials by side.
- Storage stays the private `memories` bucket with signed URLs; only the database row carries the side.
