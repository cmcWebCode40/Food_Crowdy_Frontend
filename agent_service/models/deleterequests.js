const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const deleteRequestSchema = new Schema({
    agentId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    product: {},
    comment: {
        type: String,
        required: true
    }
})


const Deleterequests = mongoose.model("Deleterequests", deleteRequestSchema)
module.exports = Deleterequests