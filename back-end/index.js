require("dotenv").config();
const cors = require("cors");
const express = require("express");
const logging = require("morgan");

const collectionsRouter = require("./routes/collections");
const photosRouter = require("./routes/photos");

const api = express();
const port = process.env.PORT;

// https://expressjs.com/en/resources/middleware/morgan.html
api.use(logging(
  process.env.LOGGING,
  { skip: () => process.env.NODE_ENV === "test" }
));

// https://expressjs.com/en/resources/middleware/cors.html
const devOrigin = ["http://localhost", /http:\/\/localhost:.*/];
const prodOrigin = process.env.PROD_FRONT_END_BASE_URL;
const origin = process.env.NODE_ENV !== "production" ? devOrigin : prodOrigin;
api.use(cors({ origin }));

api.use("/collections", collectionsRouter);
api.use("/photos", photosRouter);

const server = api.listen(port, () => {
  console.log(`Server listening on port ${port} in the ${process.env.NODE_ENV} environment.`);
});

module.exports = {
  api,
  server
};
