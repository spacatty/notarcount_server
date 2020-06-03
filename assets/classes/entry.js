class entry {
  constructor(entryData, i, c) {
    this._id = i,
    this.createdAt = c;
    this.partnerName = entryData.partnerName;
    this.documentsCount = entryData.documentsCount;
    this.translatorCost = entryData.translatorCost;
    this.notariusCost = entryData.notariusCost;
    this.totalAmount = entryData.totalAmount;
    this.courierCost = entryData.courierCost;
    this.manager = entryData.manager;
    this.seller = entryData.seller;
    this.hhold = entryData.hhold ? entryData.hhold : 0;
  }
}

module.exports = entry;
