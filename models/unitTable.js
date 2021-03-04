const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitTableSchema = new Schema({
  unitName: { type: String },
  rows: Array,
});

const unitTable = mongoose.model("unitTable", unitTableSchema);

module.exports = unitTable;
