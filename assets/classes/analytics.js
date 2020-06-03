const parseAnalytics = require("./methods/parseAnalytics");

class analytics {
  constructor(data) {
    const parsedData = parseAnalytics(data);
    this.WD = parsedData.WD;
    this.WI = parsedData.WI;
    this.WE = parsedData.WE;
    this.WR = parsedData.WR;
    this.WK = parsedData.WK;
  }
}

module.exports = analytics;
