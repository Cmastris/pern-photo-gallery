CREATE TABLE "photos" (
  "id" SERIAL PRIMARY KEY,
  "title" varchar(100) NOT NULL,
  "slug" varchar(50) UNIQUE NOT NULL,
  "summary_text" varchar(200) NOT NULL,
  "detail_text" varchar(1000),
  "location" varchar(80),
  "date_taken" date,
  "filename" varchar(80) NOT NULL
);

CREATE TABLE "collections" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar NOT NULL,
  "slug" varchar UNIQUE NOT NULL,
  "description" varchar(200)
);

CREATE TABLE "photo_collections" (
  "photo_id" integer,
  "collection_id" integer,
  PRIMARY KEY ("photo_id", "collection_id")
);

ALTER TABLE "photo_collections" ADD FOREIGN KEY ("photo_id") REFERENCES "photos" ("id");

ALTER TABLE "photo_collections" ADD FOREIGN KEY ("collection_id") REFERENCES "collections" ("id");
