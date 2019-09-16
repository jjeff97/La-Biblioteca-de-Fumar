
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "cigars" (

  "id" SERIAL PRIMARY KEY,

  "brand" VARCHAR(120) NOT NULL,

  "cigar_name" VARCHAR(120) NOT NULL,

  "size_type"  VARCHAR(120) NOT NULL,

  "ring_gauge" INT,
  
  "filler" 		VARCHAR(120) NOT NULL,
  
  "binder"    	VARCHAR(120) NOT NULL,
	
  "wrapper"		VARCHAR(120) NOT NULL


);

CREATE TABLE "country" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(120) NOT NULL
);

CREATE TABLE "strength" (
"id" SERIAL PRIMARY KEY,
  "name" VARCHAR(120) NOT NULL
);

