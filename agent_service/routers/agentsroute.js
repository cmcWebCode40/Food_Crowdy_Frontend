const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../models/agentusermodel")
const Deleterequest = require("../models/deleterequests")
const Updaterequest = require("../models/updaterequest")

// POST route for creation of data (makes axios call to products/create)
router.post("/create/id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        let product = req.body;
        product.agentId = user._id
            newProductData = await axios.post(`http://localhost:3005/products/create`, product)
        if (newProductData.data) {
            res.status(200).send({ message: "product created succesfully" })
        }
    } catch (error) {

    }
})

// GET route to view all agents personal pending uploaded products
router.get("/pending/:id", async (req, res) => { 
    try {
      const pendingProductsData = await axios.get(`http://localhost:3005/products/pending/${req.params.id}`)
      if(pendingProductsData.data){
          res.send(pendingProductsData.data)
      }
    } catch (error) {

    }
})

// GET route to view all approved uploaded products
router.get("/approved/:id", async (req, res) => { 
    try {
      const approvedProductsData = await axios.get(`http://localhost:3005/products/approved/${req.params.id}`)
      if(approvedProductsData.data){
          res.send(approvedProductsData.data)
      }
    } catch (error) {

    }
})

// GET route to render delete request page

router.get("/deleterequest/:id", async (req, res) => { 
    try {
        let product = await axios.get(`http://localhost:3005/products/${req.params.id}`)
      if(product.data){
          res.send(product.data)
      }
    } catch (error) {

    }
})

// POST route to make delete request for uploaded product
router.post("/deleterequest/:id", async (req, res) => { 
    try {
      let product = await axios.get(`http://localhost:3005/products/${req.params.id}`)
      let deleteRequest = Deleterequest.create({
          agentId = product.agentId,
          product = product.data,
          productId = product._id,
          comment = req.body.comment
    })
    if(deleteRequest){
        res.status(200).send()
    }
      
    } catch (error) {

    }
})

// GET route to render update request page

router.get("/updaterequest/:id", async (req, res) => { 
    try {
        let product = await axios.get(`http://localhost:3005/products/${req.params.id}`)
      if(product.data){
          res.send(product.data)
      }
    } catch (error) {

    }
})

// POST route to make update request for uploaded product

router.post("/updaterequest/:id", async (req, res) => { 
    try {
      let product = await axios.get(`http://localhost:3005/products/${req.params.id}`)
      let deleteRequest = Updaterequest.create({
          agentId = product.agentId,
          product = product.data,
          newUnitPrice = req.body.newUnitPrice,
          newBulkPrice = req.body.newBulkPrice,
          productId = product._id,
          comment = req.body.comment
    })
    if(deleteRequest){
        res.status(200).send()
    }
      
    } catch (error) {

    }
})

// Helper GET route to find all update requests
router.get("/updaterequests", async (req, res) => { 
    try {
        let updaterequests = await Updaterequest.find()
      if(updaterequests){
          res.send(updaterequests)
      }
    } catch (error) {

    }
})
// Helper GET route to find all delete requests
router.get("/deleterequests", async (req, res) => { 
    try {
        let deleterequests = await Deleterequest.find()
      if(deleterequests){
          res.send(deleterequests)
      }
    } catch (error) {

    }
})

// Helper GET route to find one delete request
router.get("/finddeleterequest/:id", async (req, res) => { 
    try {
        let deleterequest = await Deleterequest.find({_id: req.params.id})
      if(deleterequest){
          res.send(deleterequest)
      }
    } catch (error) {

    }
})

// Helper GET route to find one update request
router.get("/findupdaterequests/:id", async (req, res) => { 
    try {
        let updaterequests = await Updaterequest.find({_id: req.params.id})
      if(updaterequests){
          res.send(updaterequests)
      }
    } catch (error) {

    }
})
module.exports = router