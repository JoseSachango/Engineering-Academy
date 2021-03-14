const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        name: String,
        userId: String
    },

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
    notes: [
        {
            type: Schema.Types.ObjectId,
            ref: "Notes"
        }
    ],
    newProject: [
        {
            type: Schema.Types.ObjectId,
            ref: "newProject"
        }
    ]
        
        

})

const User = mongoose.model("User", userSchema);//The model name is Workout -> is this also the table name?

module.exports = User; //The database name is workout