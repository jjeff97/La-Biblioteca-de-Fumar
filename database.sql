
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

  "brand" VARCHAR(100) NOT NULL,

  "cigar_name" VARCHAR(120) NOT NULL,
	
  "country" 	VARCHAR(50) NOT NULL,
  
  "strength"		VARCHAR(50) NOT NULL,

  "size_type"  VARCHAR(50) NOT NULL,

  "ring_gauge" INT,
  
  "filler" 		VARCHAR(50) NOT NULL,
  
  "binder"    	VARCHAR(50) NOT NULL,
	
  "wrapper"		VARCHAR(50) NOT NULL,
  
  "humidor_count" INT


);

 INSERT INTO "cigars" ("brand", "cigar_name", "country", "strength", "size_type", "ring_gauge", "filler", "binder", "wrapper")
VALUES('Rocky Patel', 'Vintage 1990', 'Hondurus', 'Medium to Full', 'Perferto', 48, 'Dominican', 'Nicaraguan', 'Connecticut Broadleaf'),
('MonteCristo', 'No.2', 'Dominican Republic', 'medium', 'Torpedo', 50, 'Dominican Republic', 'Dominican Republic','Connecticut' ),
('Arturo Fuente', 'Fuente Fuente Opus X', 'Dominican Republic', 'full', 'Figurado', 49, 'Dominican Republic','Dominican Republic', 'Dominican Republic'),
('Cohiba', 'Behike 56', 'Cuba', 'full', 'Double Robusto', 56, 'Cuban', 'Cuban', 'Cuban'),
('Oscar Valladares', 'Super Fly', "Honduras", 'full', 'Super Toro', 54, 'Nicaraguan', 'Honduran', 'San Andres');