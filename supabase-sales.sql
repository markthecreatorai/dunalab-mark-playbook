create table if not exists public.sales (
  id uuid default gen_random_uuid() primary key,
  email text,
  stripe_session_id text unique not null,
  stripe_payment_intent text,
  amount integer not null,
  currency text default 'brl',
  product text not null,
  status text default 'completed',
  created_at timestamptz default now()
);

alter table public.sales enable row level security;

drop policy if exists "insert_sales" on public.sales;
create policy "insert_sales" on public.sales
for insert to anon, authenticated
with check (true);
