const express = require("express");
const entryRoute = express.Router();

const entrySchema = require("../schemas/entrySchema");
const arrayOfWeeks = require("../classes/arrayOfWeeks");

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
    entries: JSON.stringify(req.body.entryData),
  });
  try {
    const savedEntry = await newEntry.save();
    res.status(201).send({ savedEntry });
  } catch (error) {
    res.status(501).send({ error });
  }
});

entryRoute.get("/normalized", async (req, res) => {
  try {
    const _appData = await new arrayOfWeeks(await entrySchema.find({}));
    res.status(200).send({ appData: _appData });
  } catch (error) {
    console.log(error);
    res.status(501).send({ error });
  }
});
module.exports = entryRoute;
