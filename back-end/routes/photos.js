const express = require("express");
const db = require("../db/index");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const photosData = await db.getPhotos(req.query.collection_id);
    res.json(photosData);
  } catch (err) {
    res.status(500).send("Sorry, photos could not be retrieved.");
  }
});

module.exports = router;
