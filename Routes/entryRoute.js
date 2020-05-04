const express = require("express");
const entrySchema = require("../Schemas/entrySchema");
const entryRoute = express.Router();

const countWeek = (week) => {
  let weekIncome = 0;
  let weekExpense = 0;
  let weekRevenue = 0;
  week.forEach((day) => {
    weekIncome += day.entryData.totalData[0].totalIncome;
    weekExpense += day.entryData.totalData[0].totalExpense;
    weekRevenue += day.entryData.totalData[0].totalCount;
  });

  const resultingObject = {
    weekIncome,
    weekExpense,
    weekRevenue,
  };
  return resultingObject;
};

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
  let arrayOfEntries = [];
  let arrayOfWeeks = [];

  class entry {
    constructor(actualEntry) {
      this._id = actualEntry._id;
      this.createdAt = new Date(actualEntry.createdAt).toLocaleDateString();
      this.entryData = JSON.parse(JSON.parse(actualEntry.entries));
    }
  }

  class week {
    constructor(slicedArray) {
      const weekCountingData = countWeek(slicedArray);
      this.finished = slicedArray.length == 5 ? true : false;
      this.periodFrom = slicedArray[0].createdAt;
      this.periodTill = this.finished
        ? slicedArray[slicedArray.length - 1].createdAt
        : "../../....";
      this.weekEntryData = slicedArray;
      this.weekIncome = weekCountingData.weekIncome;
      this.weekExpense = weekCountingData.weekExpense;
      this.weekRevenue = weekCountingData.weekRevenue;
    }
  }

  try {
    const everythingFound = await entrySchema.find({});
    everythingFound.forEach((aEntry) => {
      arrayOfEntries.push(new entry(aEntry));
    });
    for (let i = 0, l = arrayOfEntries.length; i < l; i += 5) {
      arrayOfWeeks.push(new week(arrayOfEntries.slice(i, i + 5)));
    }
    res.status(200).send({
      arrayOfWeeks,
    });
  } catch (error) {
    res.status(501).send({ error });
  }
});
module.exports = entryRoute;
