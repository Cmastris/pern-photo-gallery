require("dotenv").config();
const cors = require("cors");
const express = require("express");
const logging = require("morgan");

const api = express();
const port = process.env.PORT;

api.use(logging(process.env.LOGGING));

// https://expressjs.com/en/resources/middleware/cors.html
api.use(cors({
  origin: "http://localhost:3000",  // Change in PROD
}));

api.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = api.listen(port, () => {
  console.log(`Server listening on port ${port} in the ${process.env.NODE_ENV} environment.`);
});

module.exports = {
  api,
  server
};
