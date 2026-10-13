-- Guillaume-Shop schema (Supabase/PostgreSQL)
-- This file is a starter schema for the store, the admin, the orders flow, payments and staff.
-- It must be reviewed before production and completed with RLS policies and strong admin access.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  full_name text,
  phone text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.roles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  created_at timestamptz default now()
);

create table if not exists public.permissions (
  id uuid primary key default gen_random_uuid(),
  role_id uuid not null references public.roles(id) on delete cascade,
  action text not null,
  created_at timestamptz default now()
);

create table if not exists public.staff_members (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  role_id uuid references public.roles(id) on delete set null,
  email text not null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  parent_id uuid references public.categories(id) on delete set null,
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  category_id uuid references public.categories(id) on delete set null,
  base_price integer not null,
  promo_price integer,
  cost_price integer,
  sku text,
  stock_quantity integer not null default 0,
  low_stock_threshold integer not null default 5,
  status text not null default 'active' check (status in ('active', 'draft', 'archived')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.product_images (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  image_url text not null,
  alt_text text,
  sort_order integer default 0,
  is_primary boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  size text,
  color text,
  sku text,
  extra_price integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.inventory (
  id uuid primary key default gen_random_uuid(),
  variant_id uuid references public.product_variants(id) on delete cascade,
  quantity integer not null default 0,
  reserved_quantity integer not null default 0,
  updated_at timestamptz default now()
);

create table if not exists public.inventory_movements (
  id uuid primary key default gen_random_uuid(),
  variant_id uuid references public.product_variants(id) on delete cascade,
  delta integer not null,
  reason text not null,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists public.carts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  session_token text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid not null references public.carts(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  variant_id uuid references public.product_variants(id) on delete set null,
  quantity integer not null default 1,
  unit_price integer not null,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  profile_id uuid references public.profiles(id) on delete set null,
  status text not null default 'pending_payment' check (status in (
    'pending_payment',
    'payment_submitted',
    'payment_under_review',
    'payment_confirmed',
    'payment_rejected',
    'preparing',
    'ready_to_ship',
    'shipped',
    'delivered',
    'cancelled',
    'refund_requested',
    'refund_in_progress',
    'refunded'
  )),
  subtotal integer not null default 0,
  shipping_fee integer not null default 0,
  discount integer not null default 0,
  total integer not null default 0,
  currency text not null default 'HTG',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete restrict,
  variant_id uuid references public.product_variants(id) on delete set null,
  product_name text not null,
  variant_name text,
  quantity integer not null default 1,
  unit_price integer not null,
  created_at timestamptz default now()
);

create table if not exists public.payment_proofs (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  uploaded_by uuid references public.profiles(id) on delete set null,
  stored_path text not null,
  mime_type text,
  size_bytes integer,
  checksum text,
  is_private boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.payment_reviews (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  reviewer_id uuid references public.profiles(id) on delete set null,
  decision text not null check (decision in ('accepted', 'rejected')),
  reason text,
  reviewed_at timestamptz default now()
);

create table if not exists public.delivery_addresses (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  full_name text not null,
  phone_primary text not null,
  phone_secondary text,
  department text not null,
  city text not null,
  address_line text not null,
  landmark text,
  instructions text,
  gps_latitude numeric,
  gps_longitude numeric,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.delivery_assignments (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  assigned_to uuid references public.profiles(id) on delete set null,
  status text not null default 'pending',
  assigned_at timestamptz default now()
);

create table if not exists public.delivery_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  event_type text not null,
  details text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz default now()
);

create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  referral_code text not null unique,
  is_active boolean default true,
  created_at timestamptz default now(),
  expires_at timestamptz
);

create table if not exists public.referral_clicks (
  id uuid primary key default gen_random_uuid(),
  referral_id uuid references public.referrals(id) on delete cascade,
  source_ip text,
  user_agent text,
  created_at timestamptz default now()
);

create table if not exists public.referral_attributions (
  id uuid primary key default gen_random_uuid(),
  referral_id uuid references public.referrals(id) on delete cascade,
  order_id uuid references public.orders(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.commissions (
  id uuid primary key default gen_random_uuid(),
  referral_id uuid references public.referrals(id) on delete cascade,
  order_id uuid references public.orders(id) on delete cascade,
  amount integer not null,
  status text not null default 'pending' check (status in ('pending','approved','paid','rejected')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.financial_ledger (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  entry_type text not null check (entry_type in ('credit','debit','reservation','release','refund')),
  amount integer not null,
  reference text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.withdrawal_requests (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  amount integer not null,
  beneficiary_name text not null,
  natcash_number text not null,
  status text not null default 'pending' check (status in ('pending','under_review','approved','rejected','paid')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  status text not null default 'open',
  is_human_requested boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references public.conversations(id) on delete cascade,
  sender_profile_id uuid references public.profiles(id) on delete set null,
  content text not null,
  is_from_customer boolean default true,
  is_read boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  body text not null,
  is_read boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.flash_sales (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.flash_sale_items (
  id uuid primary key default gen_random_uuid(),
  flash_sale_id uuid references public.flash_sales(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  promo_price integer not null,
  quantity_total integer not null default 0,
  quantity_reserved integer not null default 0,
  quantity_sold integer not null default 0,
  created_at timestamptz default now()
);

create table if not exists public.wishlists (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.wishlist_items (
  id uuid primary key default gen_random_uuid(),
  wishlist_id uuid references public.wishlists(id) on delete cascade,
  product_id uuid references public.products(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.store_settings (
  id uuid primary key default gen_random_uuid(),
  shop_name text,
  logo_url text,
  natcash_number text,
  contact_email text,
  shipping_policy text,
  return_policy text,
  announcement_message text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_profile_id uuid references public.profiles(id) on delete set null,
  action text not null,
  object_type text,
  object_id uuid,
  event_date timestamptz default now(),
  result text not null,
  reason text
);

create index if not exists idx_products_category on public.products(category_id);
create index if not exists idx_products_status on public.products(status);
create index if not exists idx_orders_profile on public.orders(profile_id);
create index if not exists idx_orders_status on public.orders(status);
create index if not exists idx_commissions_status on public.commissions(status);
create index if not exists idx_messages_conversation on public.messages(conversation_id);
create index if not exists idx_notifications_profile on public.notifications(profile_id);

-- RLS is intentionally left as a starter; production needs explicit row policies
-- with checks for profile ownership, admin authorisation and private payment proof access.

alter table public.profiles enable row level security;
alter table public.orders enable row level security;
alter table public.payment_proofs enable row level security;
alter table public.withdrawal_requests enable row level security;
alter table public.audit_logs enable row level security;

comment on table public.payment_proofs is 'Private payment evidence storage; not visible to customers or support by default.';
comment on table public.audit_logs is 'Financial and access-sensitive logs; write-only for ordinary employees.';
