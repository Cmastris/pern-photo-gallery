const pg = require("pg");

const pool = new pg.Pool();

// https://node-postgres.com/features/pooling#single-query
const query = (text, params) => {
  return pool.query(text, params);
};

module.exports = query;
