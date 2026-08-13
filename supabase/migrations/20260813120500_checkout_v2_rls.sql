-- Checkout v2 is server-only. No browser role may read or mutate operational records.

alter table preorders enable row level security;
alter table order_evidence enable row level security;
alter table disputes enable row level security;
alter table webhook_events enable row level security;

revoke all on table preorders from anon, authenticated;
revoke all on table order_evidence from anon, authenticated;
revoke all on table disputes from anon, authenticated;
revoke all on table webhook_events from anon, authenticated;

grant all on table preorders to service_role;
grant all on table order_evidence to service_role;
grant all on table disputes to service_role;
grant all on table webhook_events to service_role;
