const express = require("express");
const router = express.Router();
const Bulkshare = require("../models/bulksharemodels")

// GET route for landing page for joining a bulkshare (join bulkshare button GET route comes from user routes file)
router.get("/join/:id", async (req, res)=>{
    try {
        const bulkShareOrder = await Bulkshare.findById(req.params.id)
        res.send(bulkShareOrder)
    } catch (error) {
        res.status(404).send()
    }
})

// Helper POST route to instantiate new bulkshare document (trigged by axios on users/checkout/:id on payment completion)
router.post("/create", async (req, res)=>{
    try {
        const createdBulkshareorder = await Bulkshare.create({
        email: req.body.email,
        product: req.body.product,
        totalParticipants: req.body.totalParticipants,
        currentParticipants: req.body.currentParticipants,
        participants: req.body.participants,
        expiresAt: req.body.expiresAt
        })
        await createdBulkshareorder.save()
        res.send(createdBulkshareorder)
    } catch (error) {
        console.error(error)
    }
})

// Helper GET route to find if a product has been purchased by a user (trigged by axios on products/details/:id)
router.get("/myorders", async (req, res)=>{
    try {
    const foundOrder = await Bulkshare.findOne({ $and: [ { participants: req.query.userId }, { 'product._id': req.query.productId} ] })
    res.send(foundOrder)
    } catch (error) {
        console.log(error)
    }
})

// Helper GET route to find all a users pending orders (trigged by axios on products/details/:id)
router.get("/mypendingorders/:id", async (req, res)=>{
    try {
    const foundOrder = await Bulkshare.find({ $and: [ { participants: req.params.id }, { status: "pending"} ] })
    res.send(foundOrder)
    } catch (error) {
        console.log(error)
    }
})

// Helper GET route to find all a users processing orders (trigged by axios on products/details/:id)
router.get("/myprocessingorders/:id", async (req, res)=>{
    try {
    const foundOrder = await Bulkshare.find({ $and: [ { participants: req.params.id }, { status: "processing"} ] })
    res.send(foundOrder)
    } catch (error) {
        console.log(error)
    }
})
// Helper GET route to find if a product is currently being bulkshared (trigged by axios on user/createbulkshare/checkout/:userId/)
router.get("/sharestatus/:id", async (req, res)=>{
    try {
    const activeShare = await Bulkshare.find({'product._id': req.params.id}).sort({createdAt: -1})
    const arrayLength = activeShare.length;
    console.log(activeShare[arrayLength -1]);
    res.send(activeShare[arrayLength -1]);
    } catch (error) {
        console.log(error)
    }
})
// Helper POST route to update a bulkshare document (trigged by axios on users/joinbulkshare/checkout/:userId/:bulkProductId on payment completion)
router.post("/update/:bulkProductId", async (req, res)=>{
    try {
        const updatedBulkshare = await Bulkshare.updateOne({_id: req.params.bulkProductId}, req.body)
        res.send(updatedBulkshare)
    } catch (error) {
        console.error(error)
    }
})
module.exports = router