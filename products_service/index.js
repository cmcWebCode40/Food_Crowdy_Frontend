const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const productsRouter = require("./routers/productsroute");
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products", productsRouter)
mongoose.connect("mongodb://localhost/productdatabase", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once("open", ()=>{
  console.log("PRODUCT database is up")
}).on("error", ()=>{
  console.log("Error connecting to PRODUCT database")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log(`Listening on port ${PORT}`)  
})

