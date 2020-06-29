const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken")

const usersSchema = new Schema({
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
    
    cart: [{}],
    
    complaints: [],

    temperament: [],
     
    tokens: [{token:{
        type: String
    }}]
})

usersSchema.methods.generateAuthToken = async function(){
    user = this
    const token = await jwt.sign({_id: user._id.toJSON()}, "secretkeythatiused")
    user.tokens = user.tokens.concat({token: token})
    await user.save()
    return token
}

const User = mongoose.model("User", usersSchema)
module.exports = User