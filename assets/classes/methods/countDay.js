const countDay = (_) => {
  let dayExpense = {
    courierCost: 0,
    manager: 0,
    seller: 0,
    translation: 0,
    notarization: 0,
    total: 0,
  };
  let dayIncome = 0;
  let dayRevenue = 0;
  let dayDocuments = 0;

  _.forEach((dayEntry) => {
    dayDocuments += dayEntry.documentsCount > 0 ? dayEntry.documentsCount : 0;
    dayExpense.courierCost +=
      dayEntry.courierCost > 0 ? dayEntry.courierCost : 0;
    dayExpense.manager += dayEntry.manager > 0 ? dayEntry.manager : 0;
    dayExpense.seller += dayEntry.seller > 0 ? dayEntry.seller : 0;
    dayExpense.translation +=
      dayEntry.translatorCost > 0 ? dayEntry.translatorCost : 0;
    dayExpense.notarization +=
      dayEntry.notariusCost > 0 ? dayEntry.notariusCost : 0;
    dayIncome += dayEntry.totalAmount > 0 ? dayEntry.totalAmount : 0;
  });

  dayExpense.total +=
    dayExpense.courierCost +
    dayExpense.manager +
    dayExpense.seller +
    dayExpense.translation +
    dayExpense.notarization;
  dayRevenue += dayIncome - dayExpense.total;
  return {
    dayIncome,
    dayExpense,
    dayRevenue,
    dayDocuments,
  };
};

module.exports = countDay;
