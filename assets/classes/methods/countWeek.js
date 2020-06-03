const countWeek = (week) => {
  let weekExpense = {
    courierCost: 0,
    manager: 0,
    seller: 0,
    translation: 0,
    notarization: 0,
    total: 0,
  };
  let weekIncome = 0;
  let weekRevenue = 0;
  let weekDocuments = 0;
  week.forEach((e) => {
    weekIncome += e.dayStats.dayIncome;
    weekDocuments += e.dayStats.dayDocuments;
    weekExpense.seller += e.dayStats.dayExpense.seller;
    weekExpense.manager += e.dayStats.dayExpense.manager;
    weekExpense.translation += e.dayStats.dayExpense.translation;
    weekExpense.courierCost += e.dayStats.dayExpense.courierCost;
    weekExpense.notarization += e.dayStats.dayExpense.notarization;
  });
  weekExpense.total +=
    weekExpense.courierCost +
    weekExpense.manager +
    weekExpense.seller +
    weekExpense.translation +
    weekExpense.notarization;

  weekRevenue += weekIncome - weekExpense.total;
  return {
    weekIncome,
    weekExpense,
    weekRevenue,
    weekDocuments,
  };
};

module.exports = countWeek;
