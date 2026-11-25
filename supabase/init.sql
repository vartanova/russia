-- Схема таблицы, используемой src/api/travel.ts.
CREATE TABLE IF NOT EXISTS public."newTravel" (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination text NOT NULL,
  date_start text NOT NULL,
  date_end text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
