const week = require("../week");

const sliceWeeks = (AOE) => {
  let AOW = [];
  for (let i = 0, l = AOE.length; i < l; i += 5) {
    AOW.push(new week(AOE.slice(i, i + 5)));
  }
  return AOW;
};

module.exports = sliceWeeks;
