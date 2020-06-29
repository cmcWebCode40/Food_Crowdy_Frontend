const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")

const adminUserSchema = new Schema({
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
    
    roles: []
})

adminUserSchema.methods.generateAuthToken = async function(){
    user = this
    const token = await jwt.sign({_id: user._id.toJSON()}, "secretkeythatiused")
    user.tokens = user.tokens.concat({token: token})
    await user.save()
    return token
}

const Adminuser = mongoose.model("Adminuser", adminUserSchema)
module.exports = Adminuser