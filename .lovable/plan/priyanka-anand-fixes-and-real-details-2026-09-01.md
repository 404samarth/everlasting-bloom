# Priyanka & Anand — fixes and real details

Work happens in exactly the order you listed.

## 1. Fix the blank screen after "Bas thoda sa wait..."
The intro should move from the suspense lines to the blurred couple + language choice, then the 30% reveal, the date question, and "who are you to them?". Right now it goes blank there. First step is to reproduce the scene transition in a real browser and read the console, then fix the actual cause (the scene cross-fade/timer handoff around scenes 3-4 is the suspect, but it will be confirmed before changing anything). After the fix, the full 7-scene sequence gets walked through end to end to confirm every scene renders.

## 2. Blessings that appear instantly above the form
A guest submits a blessing and it is added to the top of the blessing cards right away, with a soft fade-in. Since you want everyone to see them, blessings are stored in Lovable Cloud so all guests see the same wall (name, relation, message, time). The existing family testimonials stay as the seeded first entries.

## 3. Photo memories as a scrolling card row
Uploaded photos appear as a horizontally scrolling row of cards placed directly above the upload button, newest first, with snap scrolling for mobile. Photos upload to Cloud storage so every guest sees every photo. Basic guard: images only, size-limited and downscaled before upload.

## 4. Arranged-marriage story rewrite
All romance copy is rewritten to fit the real story: families met and fixed the match, and Priyanka and Anand have been getting to know each other over calls and video calls since. New timeline beats replace the café/proposal fiction — e.g. the families meeting, the roka/match being fixed, the first phone call, late-night video calls, and now finally meeting as bride and groom in Burhanpur. Hero line, invitation text and Instagram copy get the same treatment. Hinglish + Hindi versions both updated.

## 5. The five celebrations (single venue, Burhanpur Palace, Burhanpur, M.P.)
| Function | Date | Time |
|---|---|---|
| Sagai | 18 Nov | 12:00 PM |
| Mehndi | 18 Nov | 5:00 PM |
| Sangeet | 18 Nov | 6:30 PM |
| Haldi | 19 Nov | 11:00 AM |
| Wedding | 19 Nov | 7:00 PM |

Reception is removed. Countdown targets the wedding on 19 Nov, 7:00 PM IST. City everywhere becomes Burhanpur, Madhya Pradesh. (You wrote Haldi at 11 PM — read as 11 AM, since it sits before a 7 PM wedding. Say the word if it really is night.)

## 6. New digital wedding card
A fresh card image generated with the real details — Priyanka Saxena & Anand Raghuwanshi, 18-19 November 2026, Burhanpur Palace, Burhanpur M.P. — in the site's wine/ivory/gold style, replacing the current card for both the view and download actions.

## 7. Families section
- Bride side: The Saxena Family — Smt. Seema & Shri Manoj Saxena, with grandparents Shri K. N. Saxena and Smt. Premkumari Saxena.
- Groom side: The Raghuwanshi Family — names left as placeholders for you to change later, surname corrected to Raghuwanshi.
- Names, hashtag, header initials, invitation signature and page title all updated to Saxena & Raghuwanshi.

## Technical notes
- Enable Lovable Cloud; add a `blessings` table (approved-on-insert, public read, insert by anyone) and a public `memories` storage bucket with a `memories` table row per photo, with grants and RLS policies.
- Reads/writes go through TanStack server functions; the two sections switch from localStorage to Cloud with optimistic prepend so the new item shows immediately.
- All content stays centralized in `src/data/wedding.ts` so you can edit copy, dates and names in one file.
