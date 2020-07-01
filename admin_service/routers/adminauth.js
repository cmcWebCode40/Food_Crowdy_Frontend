const express = require("express");
const router = express.Router();
const User = require("../models/adminusermodel");
const loginAuth = require("../jwtauth");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

//user Sign up route
router.post('/signup', async (req, res) => {

    const { error } = await registerValidation({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber
    });
    if (error) return res.status(400).send({ message: error.details[0].message });
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(422).send({ message: "Email already exists!" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    try {
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber
        });
        const token = await newUser.generateAuthToken()
        res.send({ newUser, token })
    } catch (error) {
        console.log(error)
    }
});
//user Sign in route
router.post('/signin', async (req, res, next) => {
    const { error } = await loginValidation({
        email: req.body.email,
        password: req.body.password
    });
    if (error) return res.status(400).send({ message: error.details[0].message });
    const validUser = await User.findOne({ email: req.body.email });
    if (!validUser) return res.status(400).send({ message: "Invalid Email" });
    try {
        const user = await bcrypt.compare(req.body.password, validUser.password);
        if (!user) return res.status(400).send({ message: "Invalid login credentials" });
        const token = await jwt.sign({ _id: validUser._id.toJSON() }, "secretkeythatiused")
        console.log(validUser)
        validUser.tokens = validUser.tokens.concat({ token: token })
        res.send({ validUser, token })

    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
});
router.post("/logout", loginAuth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            token.token !== req.token
        })
        await req.user.save()
    } catch (error) {
        res.status(500).send()
    }
})




module.exports = router