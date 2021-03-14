const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newProjectSchema = new Schema({
  newProjectName: { type: String },
  components: Array,
  units: [
    {
        type: Schema.Types.ObjectId,
        ref: "unitTable"
    }
  ],

  streams: [
      {
          type: Schema.Types.ObjectId,
          ref: "Streams"
      }
  ],
});

const newProject = mongoose.model("newProject", newProjectSchema);

module.exports = newProject;
