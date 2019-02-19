const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// const dateSchema = new Schema({
//     date: {
//         type: new Date()
//     }
// });

const gradelevelSchema = new Schema({
    gradelevel: {
        type: String
    }
});

const subjectSchema = new Schema({
    subject:{
        type: String
    }
});

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
    name: {
        type: String
    },
    score: [scoreSchema]
});

const arrayngementSchema = new Schema({
    gradelevel: [gradelevelSchema],
    subject: [subjectSchema],
    numberofstudents: {
        type: Number
    },
    student: [studentSchema]
});

// const arrayngementSchema = new Schema({
//     classdata: [classdataSchema]
// });

module.exports = mongoose.model("Arrayngement", arrayngementSchema);