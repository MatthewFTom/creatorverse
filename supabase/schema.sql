-- Run this in the Supabase SQL Editor for your project.

create table if not exists public.creators (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  description text not null,
  "imageURL" text
);

alter table public.creators enable row level security;

create policy "Allow public read" on public.creators
  for select using (true);

create policy "Allow public insert" on public.creators
  for insert with check (true);

create policy "Allow public update" on public.creators
  for update using (true);

create policy "Allow public delete" on public.creators
  for delete using (true);

-- Seed at least 5 creators for the homepage
insert into public.creators (name, url, description, "imageURL") values
  (
    'Marques Brownlee',
    'https://www.youtube.com/@mkbhd',
    'Tech reviews, gadgets, and deep dives into consumer electronics.',
    'https://picsum.photos/seed/mkbhd/400/225'
  ),
  (
    'Emma Chamberlain',
    'https://www.youtube.com/@emmachamberlain',
    'Lifestyle vlogs, coffee chats, and candid day-in-the-life content.',
    null
  ),
  (
    'Ali Abdaal',
    'https://www.youtube.com/@aliabdaal',
    'Productivity, studying, and building a life you love through evidence-based advice.',
    null
  ),
  (
    'Linus Tech Tips',
    'https://www.youtube.com/@LinusTechTips',
    'PC hardware, benchmarks, and entertaining tech industry commentary.',
    null
  ),
  (
    'Veritasium',
    'https://www.youtube.com/@veritasium',
    'Science education with stunning experiments and counterintuitive physics.',
    null
  ),
  (
    'Fireship',
    'https://www.youtube.com/@Fireship',
    'Fast-paced dev tutorials, tech news, and software engineering in 100 seconds.',
    null
  );
