const express = require("express");
const router = express.Router();
const User = require("../models/usersmodel");
const loginAuth = require("../jwtauth");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");
const jwt = require("jsonwebtoken")
const Cart = require("../cart")
const axios = require("axios")
const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = await jwt.verify(token, "secretkeythatiused")
        const user = await User.findOne({ _id: decoded._id, "tokens.token": token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.send({ oldUrl: req.url || null, bulkProductId: req.params.bulkProductId || null })
    }
}
//Helper GET route for finding single user
router.get("/search/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.send(user)
    } catch (error) {
        res.status(403).send()
    }
})

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
        if (req.body.cart !== undefined) {
            newUser.cart = [req.body.cart]
        }
        await newUser.save()
        if (req.body.oldUrl !== undefined) {
            res.send({ newUser, token, oldUrl: req.body.oldUrl })
        } else {
            res.send({ newUser, token })
        }

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
        if (req.body.cart !== undefined) {
            validUser.cart = [req.body.cart]
        }
        await validUser.save()
        if (req.body.oldUrl != undefined) {
            res.send({ validUser, token, oldUrl: req.body.oldUrl })
        } else {
            res.send({ validUser, token })
        }

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
router.get("/rendercart/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        let sumTotal = 0;
        if (user.cart[0] !== undefined && user.cart[0].totalQuantity > 0) {
            sumTotal += user.cart[0].totalQuantity
        }
        res.send({
            cart: user.cart[0] || {},
            totalItems: sumTotal || 0
        })
    } catch (error) {
        res.status(403).send
    }
})
// Helper POST route for adding to user cart 
router.post("/add-to-cart", async (req, res) => {
    try {
        if (req.query.userId !== undefined) {
            const user = await User.findById(req.query.userId);
            const cart = await new Cart(user.cart[0] || {})
            await cart.add(req.body, req.query.productId)
            await User.findByIdAndUpdate(req.query.userId, { "cart": [cart] })
            res.send(user)

        }
    } catch (error) {
        console.log(error)
    }
})

// GET route to completely remove an item from cart (trigged by axios on products/removecartitem/:id)
router.get("/removecartitem", async (req, res) => {
    try {
        if (req.query.userId !== "undefined") {
            const user = await User.findById(req.query.userId);
            const cart = await new Cart(user.cart[0] || {})
            await cart.removeItem(req.query.productId)
            await User.findByIdAndUpdate(req.query.userId, { "cart": [cart] })
            res.send(user)

        }
    } catch (error) {
        console.log(error)
    }
})

// GET route to display verification before payment page. Middleware checks for jwt and if not sends url to be stored for redirect after forced login
router.get("/checkoutverification",  auth, async (req, res, next) => {
    try {
        const user = await User.findById(req.query.userId);
        let sumTotal = 0;
        if (user.cart[0] !== undefined && user.cart[0].totalPrice > 0) {
            sumTotal += user.cart[0].totalPrice
        }
        res.send({ user, sumTotal })
    } catch (error) {
        console.error(error)
    }
})
router.get("/checkout", async (req, res, next) => {
    try {
        // Client to send sumTotal and address in req.query for payment integration function and for inclusion 
        // of new address to bulkshare database. API sends it back to be sent again in post
        
    } 
    catch (error) {
        console.error(error)
    }
})

// POST route to make payment. on success, revert cart to empty object and make axios call to save order
router.post("/checkout/:id", async (req, res, next) => {
    try {
        // Some third party payment code goes here
        const user = await User.findById(req.params.id);
        let newAddress = req.query.address;
        let arrayOfCartItemIds = Object.keys(user.cart[0].items)
        for (let i = 0; i < arrayOfCartItemIds.length; i++) {
            let id = arrayOfCartItemIds[i];            
            const product = await axios.get(`http://localhost:5000/products/${id}`);

            const activeShareData = await axios.get(`http://localhost:8000/bulkshare/sharestatus/${id}`);
            if (activeShareData.data) {
                let bulkShare = activeShareData.data  
                if (bulkShare.currentParticipants == product.data.maxParticipants) {
                    const nBulkShare = {
                        product: product.data,
                        totalParticipants: product.data.maxParticipants,
                        currentParticipants: user.cart[0].items[id].quantity,
                        participants: [],
                        buyers: [],
                        expiresAt: new Date() + product.data.maxDays*24*60*60*1000
                    }
                    nBulkShare.participants.push(user._id)
                    nBulkShare.buyers.push({
                        userId: user._id,
                        email: user.email,
                        name: user.name,
                        address: newAddress || user.address,
                        numberOfParts: user.cart[0].items[id].quantity,
                        phoneNumber: user.phoneNumber,
                        uniqueId: Math.random().toString().slice(2)
                        // paymentId: stripe.paymentId to be modified depending on third party payment integration
                    })
                    const newBulkShareData = await axios.post(`http://localhost:8000/bulkshare/create`, nBulkShare)
                    let newBulkShare = newBulkShareData.data
                    newBulkShare.joinUrl = `www.foodcrowdy.com/bulkshare/join/${newBulkShare._id}`
                    await axios.post(`http://localhost:8000/bulkshare/update/${newBulkShare._id}`, newBulkShare)
                    // await User.findByIdAndUpdate(req.params.id, { "cart": [{}] })
                } else {
                    bulkShare.currentParticipants = bulkShare.currentParticipants + user.cart[0].items[id].quantity;
                    bulkShare.buyers.push({
                        userId: user._id,
                        email: user.email,
                        address: user.address,
                        numberOfParts: user.cart[0].items[id].quantity,
                        phoneNumber: user.phoneNumber,
                        uniqueId: Math.random().toString().slice(2)
                    });
                    bulkShare.participants.push(user._id);
                    // console.log(i);
                    
                    await axios.post(`http://localhost:8000/bulkshare/update/${bulkShare._id}`, bulkShare);
                    // await User.findByIdAndUpdate(req.params.id, { "cart": [{}] });
                    await user.save()

                }
            } else {
                const bulkShare = {
                    product: product.data,
                    totalParticipants: product.maxParticipants,
                    currentParticipants: user.cart[0].items[id].quantity,
                    participants: [],
                    buyers: [],
                    expiresAt: new Date() + product.data.maxDays*24*60*60*1000
                    // paymentId: stripe.paymentId to be modified depending on third party payment integration
                }
                bulkShare.participants.push(user._id)
                bulkShare.buyers.push({
                    userId: user._id,
                    email: user.email,
                    address: user.address,
                    numberOfParts: user.cart[0].items[id].quantity,
                    phoneNumber: user.phoneNumber,
                    uniqueId: Math.random().toString().slice(2)
                })
                const newBulkShareData = await axios.post(`http://localhost:8000/bulkshare/create`, bulkShare)
                let newBulkShare = newBulkShareData.data
                newBulkShare.joinUrl = `www.foodcrowdy.com/bulkshare/join/${newBulkShare._id}`
                await axios.post(`http://localhost:8000/bulkshare/update/${newBulkShare._id}`, newBulkShare);
                // await User.findByIdAndUpdate(req.params.id, { "cart": [{}] })
                await user.save()
            }

        }
        res.status(200).send()
    } catch (error) {
        console.error(error)
    }
})

// GET route for displaying page for adding to cart for join bulk share action
router.get("/joinbulkshare/:id", async (req, res) => {
    try {
    const bulkShareData = await axios.get(`http://localhost:8000/bulkshare/join/${req.params.bulkProductId}`)
    const bulkShare = bulkShareData.data
    res.send(bulkShare)
    } catch (error) {
        
    }
    
})

// GET route for finding users pending bulk shares
router.get("/mypendingbulkshares/:id", async (req, res) => {
    try {
        const userPendingBulkshareData = await axios.get(`http://localhost:8000/bulkshare/mypendingorders/${req.params.id}`)
        if(userPendingBulkshareData.data){
            res.send(userPendingBulkshareData.data)
        }
    } catch (error) {
      res.status(500).send()  
    }
    
})

// GET route for finding users processing bulk shares
router.get("/myprocessingbulkshares/:id", async (req, res) => {
    try {
        const userProcessingBulkshareData = await axios.get(`http://localhost:8000/bulkshare/myprocessingorders/${req.params.id}`)
        if(userProcessingBulkshareData.data){
            res.send(userProcessingBulkshareData.data)
        }
    } catch (error) {
      res.status(500).send()  
    }
    
})

module.exports = router