const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productsSchema = new Schema({
   // imagePath: {type: String, required: true},
   title: {type: String, required: true},
   agentId: {type: String, required: true},
   category: {type: String, reuired: true},
   description: {type: String, required: true},
   price: {type: Number, required: true},
   stateOfUpload: {type: String, required: true},
   bulkPrice: { type: Number, required: true },
   maxDays: { type: Number, required: true },
   maxParticipants: { type: Number, required: true },
   discount: {type: Number},
   status: {type: String, default: "pending"},
   reviews: [],
   rating: { type: Number }
})

const Product = mongoose.model("Product", productsSchema)
module.exports = Product