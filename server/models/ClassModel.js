const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classSchema = new Schema({
    grade: {
        type: String
    },
    subject: {
        type: String
    }
})

module.exports = mongoose.model("Class", classSchema);