const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const complainsSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    },
    handledBy: [],
    orderId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
})


const Complaint = mongoose.model("Complaint", complainsSchema)
module.exports = Complaint