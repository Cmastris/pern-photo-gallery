const express = require("express");
const db = require("../db/index");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const collectionsData = await db.getPhotoCollections(req.query.photo_id);
    res.json(collectionsData);
  } catch (err) {
    res.status(500).send("Sorry, collection data could not be retrieved.");
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const collectionData = await db.getCollectionBySlug(req.params.slug);
    if (!collectionData) {
      return res.status(404).send(`A collection with the slug '${req.params.slug}' does not exist.`);
    }
    res.json(collectionData);
  } catch (err) {
    res.status(500).send("Sorry, collection data could not be retrieved.");
  }
});


module.exports = router;
