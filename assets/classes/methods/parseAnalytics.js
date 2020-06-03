const parseAnalytics = (AOW) => {
  let WD = [],
    WI = [],
    WE = [],
    WR = [],
    WK = [];
  AOW.forEach((w) => {
    WD.push(parseInt(w.weekStats.weekDocuments));
    WI.push(parseInt(w.weekStats.weekIncome));
    WE.push(parseInt(w.weekStats.weekExpense.total));
    WR.push(parseInt(w.weekStats.weekRevenue));
    WK.push(w.periodFrom);
  });
  return { WI, WE, WR, WD, WK };
};

module.exports = parseAnalytics;
