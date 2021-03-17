const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitTableSchema = new Schema({
  unitName: {type: String},
  rows: Array,
  streams: [
    {
        type: Schema.Types.ObjectId,
        ref: "Streams"
    }
  ],
  
});

const unitTable = mongoose.model("unitTable", unitTableSchema);

module.exports = unitTable;
