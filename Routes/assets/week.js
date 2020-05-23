const countWeek = (week) => {
  let weekIncome = 0;
  let weekExpense = {
    courier: 0,
    manager: 0,
    seller: 0,
    total: 0,
  };
  let weekRevenue = 0;
  let weekDocuments = 0;
  week.forEach((day) => {
    weekExpense.total += day.entryData.totalData[0].totalExpense;
    weekRevenue += day.entryData.totalData[0].totalCount;
    day.entryData.firstData.forEach((actualEntry) => {
      weekDocuments += actualEntry.documentsCount;
    });
    weekIncome += day.entryData.totalData[0].totalIncome;
    if (day.entryData.secondData) {
      weekExpense.courier += day.entryData.secondData[0].courierCost;
      weekExpense.manager += day.entryData.secondData[0].manager;
      weekExpense.seller += day.entryData.secondData[0].seller;
    } else {
      day.entryData.firstData.forEach((entry) => {
        weekExpense.courier += entry.courierCost;
        weekExpense.manager += entry.manager;
        weekExpense.seller += entry.seller;
      });
    }
  });
  const resultingObject = {
    weekIncome,
    weekExpense,
    weekRevenue,
    weekDocuments,
  };
  return resultingObject;
};

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
    this.weekDocuments = weekCountingData.weekDocuments;
  }
}

module.exports = week;
