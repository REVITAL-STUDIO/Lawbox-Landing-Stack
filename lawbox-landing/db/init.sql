CREATE SCHEMA IF NOT EXISTS lawbox;



create table lawbox.leads(
    lead_id serial primary key,
    email text unique,
    pain_point_text text null,
    firm_size text null,
    created_at timestamp default CURRENT_TIMESTAMP
);



