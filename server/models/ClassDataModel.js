const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StudentModel = './StudentModel';

const classDataSchema = new Schema({
    userId: {
        type: String
    },
    gradelevel: {
        type: String
    },
    subject: {
        type: String
    },
    year: {
        type: String
    },
    students: [StudentModel]
})

module.exports = mongoose.model("Classdata", classDataSchema);