const express = require("express");
const router = express.Router();
const axios = require("axios");

// GET route for finding all product delete requests
router.get("/deleterequest", async (req, res) => { 
    try {
        let deleteRequests = await axios.get(`http://localhost:2000/agent/myupload/deleterequests`)
      if(deleteRequests.data){
          res.send(deleteRequests.data)
      }
    } catch (error) {

    }
})

// GET route for finding all product update requests
router.get("/updaterequests", async (req, res) => { 
    try {
        let updaterequests = await axios.get(`http://localhost:2000/agent/myupload/updaterequests`)
      if(updaterequests.data){
          res.send(updaterequests.data)
      }
    } catch (error) {

    }
})

// GET route to view all pending uploaded products
router.get("/pending", async (req, res) => { 
    try {
      const pendingProductsData = await axios.get(`http://localhost:5000/products/pending`)
      if(pendingProductsData.data){
          res.send(pendingProductsData.data)
      }
    } catch (error) {

    }
})

// GET route for finding one product delete request
router.get("/finddeleterequest/:id", async (req, res) => { 
    try {
        let deleteRequest = await axios.get(`http://localhost:2000/agent/myupload/finddeleterequest/${req.params.id}`)
      if(deleteRequest.data){
          res.send(deleteRequest.data)
      }
    } catch (error) {

    }
})

// GET route for finding one product update requests
router.get("/findupdaterequests/:id", async (req, res) => { 
    try {
        let updaterequest = await axios.get(`http://localhost:2000/agent/myupload/findupdaterequests/${req.params.id}`)
      if(updaterequest.data){
          res.send(updaterequest.data)
      }
    } catch (error) {

    }
})

// POST route to approve pending uploaded products
router.post("/approvepending/:id", async (req, res) => { 
    try {
      const approvedProductData = await axios.get(`http://localhost:5000/products/approvepending/${req.params.id}`)
      if(pendingProductsData){
          res.status(200).send()
      }
    } catch (error) {

    }
})

// Helper DELETE route for removing products
router.delete("/remove/:id", async (req, res) => {
    try {
        const removedProductData = await axios.delete(`http://localhost:5000/products/remove/${req.params.id}`);
        if (removedProductData) {
            res.status(200).send()
        }
    } catch (error) {
        res.send("")
    }
})

// Helper UPDATE route for updating products
router.post("/update/:id", async (req, res) => {
    try {
        const updatedProductData = await axios.put(`http://localhost:5000/products/update/${req.params.id}`, req.body);
        if (updatedProductData) {
            res.status(200).send()
        }
    } catch (error) {
        res.send("")
    }
})


module.exports = router