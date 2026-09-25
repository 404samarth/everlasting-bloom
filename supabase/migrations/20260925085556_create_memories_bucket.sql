INSERT INTO storage.buckets (id, name, public)
VALUES ('memories', 'memories', false)
ON CONFLICT (id) DO NOTHING;
