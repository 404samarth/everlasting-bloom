DELETE FROM public.blessings;
DELETE FROM public.memories;

ALTER TABLE public.blessings ADD COLUMN side text NOT NULL;
ALTER TABLE public.blessings ADD CONSTRAINT blessings_side_check CHECK (side IN ('bride','groom'));

ALTER TABLE public.memories ADD COLUMN side text NOT NULL;
ALTER TABLE public.memories ADD CONSTRAINT memories_side_check CHECK (side IN ('bride','groom'));

DROP POLICY IF EXISTS "Anyone can leave a blessing" ON public.blessings;
CREATE POLICY "Anyone can leave a blessing" ON public.blessings FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(name) >= 1 AND char_length(name) <= 60
  AND char_length(message) >= 1 AND char_length(message) <= 800
  AND (relation IS NULL OR char_length(relation) <= 80)
  AND side IN ('bride','groom')
);

DROP POLICY IF EXISTS "Anyone can add a memory" ON public.memories;
CREATE POLICY "Anyone can add a memory" ON public.memories FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(image_path) >= 1 AND char_length(image_path) <= 300
  AND (caption IS NULL OR char_length(caption) <= 200)
  AND side IN ('bride','groom')
);