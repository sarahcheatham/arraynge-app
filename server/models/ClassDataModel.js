const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const classDataSchema = new Schema({
    userId: {
        type: String
    },
    gradelevel: {
        type: String
    },
    subject: {
        type: String
    }
})

module.exports = mongoose.model("Classdata", classDataSchema);