const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")

const agentUserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

agentUserSchema.methods.generateAuthToken = async function(){
    user = this
    const token = await jwt.sign({_id: user._id.toJSON()}, "secretkeythatiused")
    user.tokens = user.tokens.concat({token: token})
    await user.save()
    return token
}

const Agentuser = mongoose.model("Agentuser", agentUserSchema)
module.exports = Agentuser