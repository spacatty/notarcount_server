const weekStats = require("./weekStats");
const day = require("./day");

class week {
  constructor(slicedArray) {
    this.finished = slicedArray.length == 5 ? true : false;
    this.weekEntryData = slicedArray.map((x) => (x = new day(x)));
    this.weekStats = new weekStats(this.weekEntryData);
    this.periodFrom = this.weekEntryData[0].createdAt;
    this.periodTill = this.finished
      ? this.weekEntryData[this.weekEntryData.length - 1].createdAt
      : "../../....";
  }
}

module.exports = week;
