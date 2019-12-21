const express = require("express");
const entrySchema = require("../Schemas/entrySchema");
const entryRoute = express.Router();

entryRoute.get("/", async (req, res) => {
  try {
    const everythingFound = await entrySchema.find({});
    res.status(200).send(everythingFound);
  } catch (error) {
    res.status(501).send({ error });
  }
});

entryRoute.post("/create", async (req, res) => {
  const newEntry = new entrySchema({
    entries: JSON.stringify(req.body.entryData)
  });
  try {
    const savedEntry = await newEntry.save();
    res.status(201).send({ savedEntry });
  } catch (error) {
    res.status(501).send({ error });
  }
});

module.exports = entryRoute;
