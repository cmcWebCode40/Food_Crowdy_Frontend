const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const bulkshareSchema = new Schema({
product: {},
totalParticipants: {
    type: Number
},
currentParticipants: {
    type: Number
},
status: {
    type: String,
    default: "pending"
},
joinUrl: {
    type: String
},
participants: [],
buyers: [],
createdAt: {
    type: Date,
    default: new Date()
},
expiresAt: {
    type: Date
}
})



const Bulkshare = mongoose.model("Bulkshare", bulkshareSchema)
module.exports = Bulkshare