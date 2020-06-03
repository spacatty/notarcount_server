const countWeek = require("./methods/countWeek");

class weekStats {
  constructor(weekData) {
    const countedData = countWeek(weekData);
    this.weekDocuments = countedData.weekDocuments;
    this.weekExpense = countedData.weekExpense;
    this.weekRevenue = countedData.weekRevenue;
    this.weekIncome = countedData.weekIncome;
  }
}

module.exports = weekStats;
