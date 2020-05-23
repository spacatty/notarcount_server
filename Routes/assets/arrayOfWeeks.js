const week = require("./week");

const sliceWeeks = (AOE) => {
  let AOW = [];
  for (let i = 0, l = AOE.length; i < l; i += 5) {
    AOW.push(new week(AOE.slice(i, i + 5)));
  }
  return AOW;
};

const parseAnalytics = (AOW) => {
  let WD = [],
    WI = [],
    WE = [],
    WR = [],
    WK = [];
  AOW.forEach((w) => {
    WD.push(w.weekDocuments);
    WI.push(w.weekIncome);
    WE.push(w.weekExpense.total);
    WR.push(w.weekRevenue);
    WK.push(w.periodFrom);
  });
  return { WI, WE, WR, WD, WK };
};

class arrayOfWeeks {
  constructor(arrayOfEntries) {
    try {
      this.arrayOfWeeks = sliceWeeks(arrayOfEntries);
      this.analytics = parseAnalytics(this.arrayOfWeeks);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = arrayOfWeeks;
