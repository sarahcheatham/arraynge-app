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

// const teacherSchema = new Schema({
//     teacher: {type: Schema.Types.ObjectId, ref: "Classdata"}
// })

module.exports = mongoose.model("Classdata", classDataSchema);