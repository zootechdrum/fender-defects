const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const defectCode = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  media: {
    videoUrl: String,
    blog: String,
  },
  date: { type: Date, default: Date.now },
});

const Codes = mongoose.model("Defect", defectCode);

module.exports = Codes;
