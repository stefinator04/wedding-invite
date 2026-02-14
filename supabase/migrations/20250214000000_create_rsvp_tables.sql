CREATE TABLE rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_first_name TEXT NOT NULL,
  contact_last_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE guests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  rsvp_id UUID NOT NULL REFERENCES rsvps(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL
);
