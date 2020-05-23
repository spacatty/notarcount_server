const countEntryDocs = (entryItem) => {
  let documentsCount = 0;
  entryItem.firstData.forEach((actualEntry) => {
    documentsCount += actualEntry.documentsCount;
  });
  return documentsCount;
};

class entry {
  constructor(actualEntry) {
    this._id = actualEntry._id;
    this.createdAt = new Date(actualEntry.createdAt).toLocaleDateString();
    this.entryData = JSON.parse(JSON.parse(actualEntry.entries));
    if (!this.entryData.totalData[0].documentsCount) {
      this.entryData.totalData[0].documentsCount = countEntryDocs(
        this.entryData
      );
    }
  }
}

module.exports = entry;
