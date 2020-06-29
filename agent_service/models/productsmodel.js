const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const complainsSchema = new Schema({})


const Complaint = mongoose.model("Complaint", complainsSchema)
module.exports = Complaint