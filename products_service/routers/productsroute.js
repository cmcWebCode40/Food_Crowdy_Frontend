const express = require("express")
const router = express.Router();
const Product = require("../models/productsmodel");
const axios = require("axios")

// GET route to display all products
router.get("/all", async (req, res) => {
    let searchOptions = {}
    if (req.query.title != null && req.query.title !== "") {
        searchOptions.title = new RegExp(req.query.title, 'i')
        const productList = await Product.find({ title: searchOptions.title, status: "approved" })
        res.send(productList)
    } else {
        const productList = await Product.find({ status: "approved", })
        res.send(productList)
    }
})
router.get("/category/:category", async (req, res) => {
    let searchOptions = {}
    if (req.query.title != null && req.query.title !== "") {
        searchOptions.title = new RegExp(req.query.title, 'i')
        const productList = await Product.find({ title: searchOptions.title, status: "approved", category: req.params.category })
        res.send(productList)
    } else {
        const productList = await Product.find({ category: req.params.category, status: "approved", })
        res.send(productList)
    }
})

// GET route to find a single product
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(403)
    }
})
// GET route to find a single product checking if user has bought the item
router.get("/details/:id", async (req, res) => {
    try {
        const hasBought = await axios.get(`http://localhost:8000/bulkshares/myorders?userId=${req.query.userId}&productId=${req.params.id}`);
        const item = await Product.findOne({ _id: req.params.id })
        console.log(hasBought.data)
        if (hasBought.data) {
            res.send({ hasBought: true, item })
        } else {
            res.send({ hasBought: false, item })
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

router.post("/details/review/:id", async (req, res) => {
    try {
        let review = req.body.body
        const productToBeReviewed = await Product.findById(req.params.id)
        productToBeReviewed.reviews.push(review);
        await productToBeReviewed.save()
    } catch (error) {
        res.sendStatus(500)
    }
})

//GET route to add product to cart
router.get("/add-to-cart/:id", async (req, res) => {
    if (req.query.userId != undefined) {
        try {
            const item = await Product.findOne({ _id: req.params.id })
            item.numberOfParts = req.query.numberOfParts
            const response = await axios.post(`http://localhost:6000/users/add-to-cart?userId=${req.query.userId}&productId=${req.params.id}`, item)
            if (response.data.cart[0] != undefined) {
                res.status(200).send()
            }
            console.log(response.data.cart[0])
        } catch (error) {
            res.sendStatus(500)
        }
    } else {
        const item = await Product.findOne({ _id: req.params.id })
        res.send({ message: "User is not logged in", item: item })
    }

})

//GET route to completely remove an item from cart
router.get("/removecartitem/:id", async (req, res) => {
    if (req.query.userId != undefined) {
        try {
            const response = await axios.get(`http://localhost:6000/users/removecartitem?userId=${req.query.userId}&productId=${req.params.id}`)
            if (response.data != undefined) {
                res.status(200).send()
            }
            console.log(response.data.cart[0])
        } catch (error) {
            res.sendStatus(500)
        }
    } else {
        res.send({ message: "User is not logged in", id: req.params.id })
    }
})

// Helper POST route for creation of product from agent service
router.post("/create", async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        if (newProduct) {
            res.send(newProduct)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// Helper GET route for finding agents personal pending uploaded products
router.get("/pending/:id", async (req, res) => {
    try {
        const pendingProducts = await Product.find({ agentId: req.params.id, status: "pending" });
        if (pendingProducts) {
            res.send(pendingProducts)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// Helper GET route for finding all pending uploaded products
router.get("/pending", async (req, res) => {
    try {
        const pendingProducts = await Product.find({ status: "pending" });
        if (pendingProducts) {
            res.send(pendingProducts)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// Helper GET route for finding agents approved uploaded products
router.get("/approved/:id", async (req, res) => {
    try {
        const approvedProducts = await Product.find({ agentId: req.params.id, status: "approved" });
        if (approvedProducts) {
            res.send(approvedProducts)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})


// Helper DELETE route for removing products
router.delete("/remove/:id", async (req, res) => {
    try {
        const removedProduct = await Product.findOneAndRemove({ _id: req.params.id });
        if (removedProduct) {
            res.send(removedProduct)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// Helper UPDATE route for updating products
router.put("/update/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _id: req.params.id }, req.body);
        if (updatedProduct) {
            res.send(updatedProduct)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})

// Helper POST route for approving products
router.put("/update/:id", async (req, res) => {
    try {
        const approvedProduct = await Product.findByIdAndUpdate(req.params.id, { status: "approved" });
        if (approvedProduct) {
            res.send(approvedProduct)
        }
    } catch (error) {
        res.sendStatus(500)
    }
})


module.exports = router