const pg = require("pg");

// https://node-postgres.com/features/connecting
const pool = new pg.Pool();

// https://node-postgres.com/features/pooling#single-query
const query = (text, params) => {
  return pool.query(text, params);
};


const getPhotos = async (collection_id=undefined) => {
  const select = "SELECT id, title, slug, summary_text, detail_text, location, date_taken, filename FROM photos";
  let res;
  if (collection_id) {
    const join = "JOIN photo_collections ON photos.id=photo_collections.photo_id";
    const where = "WHERE photo_collections.collection_id=$1";
    res = await query(`${select} ${join} ${where}`, [collection_id]);
  } else {
    res = await query(select);
  }
  return res.rows;
};

const getPhotoBySlug = async (slug) => {
  const select = "SELECT id, title, slug, summary_text, detail_text, location, date_taken, filename FROM photos";
  const res = await query(select + " WHERE slug=$1", [slug]);
  return res.rows[0];
};

const getCollectionBySlug = async (slug) => {
  const select = "SELECT id, name, slug, description FROM collections";
  const res = await query(select + " WHERE slug=$1", [slug]);
  return res.rows[0];
};

const getPhotoCollections = async (photo_id) => {
  const select = "SELECT id, name, slug, description FROM collections";
  const join = "JOIN photo_collections ON collections.id = photo_collections.collection_id";
  const where = "WHERE photo_collections.photo_id=$1";
  res = await query(`${select} ${join} ${where}`, [photo_id]);
  return res.rows;
};


module.exports = {
  getPhotos,
  getPhotoBySlug,
  getCollectionBySlug,
  getPhotoCollections,
};
