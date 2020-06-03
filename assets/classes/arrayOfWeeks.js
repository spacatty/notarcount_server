const sliceWeeks = require("./methods/sliceWeeks");
const analytics = require("./analytics");
const entry = require("./entry");

class arrayOfWeeks {
  constructor(_AOE) {
    this.arrayOfWeeks = sliceWeeks(
      _AOE.map(
        (e) =>
          (e.entries = JSON.parse(e.entries).firstData.map(
            (x) => (x = new entry(x, e._id, e.createdAt))
          ))
      )
    );
    this.analytics = new analytics(this.arrayOfWeeks);
  }
}

module.exports = arrayOfWeeks;
