const AOW = require("./arrayOfWeeks");
const analytics = require("./analytics");

class appData {
  constructor(AOE) {
    this.arrayOfWeeks = new AOW(AOE);
    this.analytics = new analytics(this.arrayOfWeeks);
  }
}

module.exports = appData;
