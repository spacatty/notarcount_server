const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const entrySchema = require("./Schemas/entrySchema");
const serveStatic = require("serve-static");
const history = require("connect-history-api-fallback");
require("dotenv").config();

const app = express();

app.disable("X-POWERED-BY");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  process.env.MONGO,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log(`MONGO CONNECTED`);
  }
);

app.use("/entries", require("./Routes/entryRoute"));

app.use(history());
app.use(serveStatic(__dirname + "/dist/spa"));

app.listen(process.env.PORT, () => {
  console.log(`STARTED IN ${process.env.PORT}`);
});
