const mongoose = require("mongoose");

const entrySchema = mongoose.Schema(
  {
    entries: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("NOTCOUNT_ENTRY", entrySchema);
