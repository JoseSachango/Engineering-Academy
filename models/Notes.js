const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotesSchema = new Schema({

  Exercise: String,
  Title: { type: String },
  Body: String
});

const Notes = mongoose.model("Notes", NotesSchema);

module.exports = Notes;