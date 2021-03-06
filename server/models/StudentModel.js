const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
    BOYscore: {
        type: Number
    },
    EOYgoal: {
        type: Number
    },
    MOYscore: {
        type: Number
    },
    EOYscore: {
        type: Number
    }
});

const studentSchema = new Schema({
    userId: {
        type: String
    },
    name:{
        type: String
    },
    gradelevel: {
        type: String
    },
    subject:{
        type: String
    },
    score: [scoreSchema]
});

module.exports = mongoose.model("Student", studentSchema);