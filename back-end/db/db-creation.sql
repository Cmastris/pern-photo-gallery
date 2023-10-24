-- Application database
CREATE DATABASE "pern-photo-gallery"
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
  IS_TEMPLATE = False;


-- Test database (should be populated with same tables and initial data)
CREATE DATABASE "pern-photo-gallery-test"
  WITH
  OWNER = postgres
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
  IS_TEMPLATE = False;