const mongoose = require("mongoose")
const Schema = mongoose.Schema

const medicineSchema = Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    dateAdded:{
        type: Date,
        required: true,
        default: Date.now
    }
})


module.exports = Medicine = mongoose.model("Medicine",  medicineSchema)