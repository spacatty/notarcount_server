const formatedDate = require("../scripts/formatDate");
const countDay = require("./methods/countDay");

class day {
  constructor(_) {
    this._id = _._id;
    this.createdAt = new formatedDate(
      new Date(_[0].createdAt).toLocaleDateString()
    );
    this.dayEntryData = _;
    this.dayStats = countDay(this.dayEntryData);
  }
}

module.exports = day;
