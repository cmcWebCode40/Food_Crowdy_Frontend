const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/adminauth")
const complaintsRouter = require("./routers/complaints")
const productsRouter = require("./routers/productadmin")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/admin/user", usersRouter)
app.use("/admin/complaints", complaintsRouter)
app.use("/admin/products", productsRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/admindatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("ADMIN database is up")
}).on("error", ()=>{
  console.log("Error connecting to ADMIN database")
})
const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
  console.log(`Listening on ADMIN port ${PORT}`)  
})

