const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const productsRouter = require("./routers/productsroute");
const mongoose = require("mongoose")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products", productsRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/productdatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.once("open", ()=>{
  console.log("PRODUCT database is up")
}).on("error", ()=>{
  console.log("Error connecting to PRODUCT database")
})
const PORT = process.env.PORT || 3005
// app.listen(PORT, ()=>{
//   console.log(`Listening on port ${PORT}`)  
// })
// let server = require( 'https' ).createServer( app );

// server.listen( PORT , function() {
//   console.log(`Listening on PRODUCT port ${PORT}`)
// } );
const fs = require("fs");
let https = require("https")
https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'YOUR PASSPHRASE HERE'
}, app).listen(PORT)

