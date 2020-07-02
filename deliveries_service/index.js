const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/usersroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/users", usersRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/deliveriesdatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("DELIVERIES database is up")
}).on("error", ()=>{
  console.log("Error connecting to DELIVERIES database")
})
const PORT = process.env.PORT || 3004
// app.listen(PORT, ()=>{
//   console.log(`Listening on DELIVERIES port ${PORT}`)  
// })
// let server = require( 'https' ).createServer( app );

// server.listen( PORT , function() {
//   console.log(`Listening on DELIVERIES port ${PORT}`)
// } );
const fs = require("fs");
let https = require("https")
https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'YOUR PASSPHRASE HERE'
}, app).listen(PORT)

