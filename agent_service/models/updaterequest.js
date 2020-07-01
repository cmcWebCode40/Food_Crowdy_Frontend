const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const updateRequestSchema = new Schema({
    agentId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    newUnitPrice: {
        type: Number,
        required: true
    },
    newBulkPrice: {
        type: Number,
        required: true
    },
    product: {},
    comment: {
        type: String,
        required: true
    }
})


const Updaterequests = mongoose.model("Updaterequests", updateRequestSchema)
module.exports = Updaterequests