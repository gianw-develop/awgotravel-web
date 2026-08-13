-- Checkout v2 schema for a new LLC. Apply idempotently in its dedicated Supabase project.

create table if not exists preorders (
  id                         uuid primary key default gen_random_uuid(),
  customer_email             text not null,
  customer_name              text not null,
  stripe_customer_id         text,
  amount_cents               integer not null check (amount_cents between 500 and 20000),
  currency                   text not null default 'usd',
  line_items                 jsonb not null,
  combination_hash           text not null,
  policy_version             text not null,
  acceptance_version         text not null,
  acceptance_text            text not null,
  accepted_at                timestamptz not null,
  customer_ip                text,
  user_agent                 text,
  status                     text not null default 'pending',
  checkout_url               text,
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id   text unique,
  stripe_charge_id           text unique,
  stripe_invoice_id          text unique,
  invoice_pdf                text,
  recovery_url               text,
  expires_at                 timestamptz,
  expired_at                 timestamptz,
  paid_at                    timestamptz,
  delivered_at               timestamptz,
  refunded_at                timestamptz,
  failure_reason             text,
  created_at                 timestamptz not null default now(),
  updated_at                 timestamptz not null default now()
);

create index if not exists idx_preorders_status on preorders(status);
create index if not exists idx_preorders_amount_hash on preorders(amount_cents, combination_hash);
alter table preorders add column if not exists stripe_checkout_session_id text unique;

create table if not exists order_evidence (
  id                  uuid primary key default gen_random_uuid(),
  preorder_id         uuid not null references preorders(id) on delete cascade,
  evidence_type       text not null,
  delivery_method     text,
  evidence_reference text not null,
  note                text,
  recorded_by         text not null,
  occurred_at         timestamptz not null,
  created_at          timestamptz not null default now()
);

create table if not exists disputes (
  id                  uuid primary key default gen_random_uuid(),
  stripe_dispute_id   text unique not null,
  preorder_id         uuid references preorders(id) on delete set null,
  stripe_charge_id    text,
  amount_cents        integer,
  currency            text,
  reason              text,
  status              text,
  evidence_due_by     timestamptz,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);

create table if not exists webhook_events (
  stripe_event_id text primary key,
  event_type      text not null,
  livemode        boolean not null default false,
  created_at      timestamptz not null default now()
);
