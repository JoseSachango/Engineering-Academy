const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StreamSchema = new Schema({
  unitName: { type: String },
  streamSource: {type:String},
  streamTarget: {type:String},
  rows: Array
});

const Streams = mongoose.model("Streams", StreamSchema);

module.exports = Streams;
