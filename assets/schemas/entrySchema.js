const mongoose = require("mongoose");

const entrySchema = mongoose.Schema(
  {
    entries: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("nc_sch", entrySchema, "nc_data");
