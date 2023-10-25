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

router.get('/:id', async (req, res) => {
  try {
    photoData = await db.getPhotoById(req.params.id);
    if (!photoData) {
      return res.status(404).send(`A photo with the ID '${req.params.id}' does not exist.`);
    }
    res.status(200).json(photoData);
  } catch(err) {
    res.status(500).send("Sorry, this photo could not be retrieved.");
  }
});

module.exports = router;
