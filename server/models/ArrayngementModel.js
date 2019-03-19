const mongoose = require("mongoose");


const Schema = mongoose.Schema;

// const dateSchema = new Schema({
//     date: {
//         type: new Date()
//     }
// });







const arrayngementSchema = new Schema({
   
});

// const arrayngementSchema = new Schema({
//     classdata: [classdataSchema]
// });

module.exports = mongoose.model("Arrayngement", arrayngementSchema);