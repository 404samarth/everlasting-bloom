CREATE TABLE public.blessings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  relation TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.blessings TO anon;
GRANT SELECT, INSERT ON public.blessings TO authenticated;
GRANT ALL ON public.blessings TO service_role;
ALTER TABLE public.blessings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read blessings" ON public.blessings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can leave a blessing" ON public.blessings FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(name) BETWEEN 1 AND 60
  AND char_length(message) BETWEEN 1 AND 800
  AND (relation IS NULL OR char_length(relation) <= 80)
);

CREATE TABLE public.memories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  image_path TEXT NOT NULL,
  caption TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.memories TO anon;
GRANT SELECT, INSERT ON public.memories TO authenticated;
GRANT ALL ON public.memories TO service_role;
ALTER TABLE public.memories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view memories" ON public.memories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Anyone can add a memory" ON public.memories FOR INSERT TO anon, authenticated WITH CHECK (
  char_length(image_path) BETWEEN 1 AND 300
  AND (caption IS NULL OR char_length(caption) <= 200)
);