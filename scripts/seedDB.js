const mongoose = require("mongoose");
const db = require("../models");
const { electronicDefects } = require("./electronicDefects");
const { hardwareDefects } = require("./hardwareDefects");
const { finishDefects } = require("./finishDefects");
const { bodyDefects } = require("./bodyDefects");
const { neckDefects } = require("./neckDefects");
const { nutDefects } = require("./nutDefects");

let defects = electronicDefects
  .concat(hardwareDefects)
  .concat(finishDefects)
  .concat(bodyDefects)
  .concat(nutDefects)
  .concat(neckDefects);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fenderDefects"
);

db.Codes.remove({})
  .then(() => db.Codes.collection.insertMany(defects))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
