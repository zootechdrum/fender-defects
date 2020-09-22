const mongoose = require("mongoose");
const db = require("../models");
const { electronicDefects } = require("./electronicDefects");
const { hardwareDefects } = require("./hardwareDefects");

let defects = electronicDefects.concat(hardwareDefects);

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
