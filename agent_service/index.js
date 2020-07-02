const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/agentauth")
const agentsRouter = require("./routers/agentsroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/agent/user", usersRouter)
app.use("/agent/myupload", agentsRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/agentdatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("AGENT database is up")
}).on("error", ()=>{
  console.log("Error connecting to AGENT database")
})
const PORT = process.env.PORT || 3002
// app.listen(PORT, ()=>{
//   console.log(`Listening on AGENT port ${PORT}`)  
// })
// let server = require( 'https' ).createServer( app );

// server.listen( PORT , function() {
//   console.log(`Listening on AGENT port ${PORT}`)
// } );
const fs = require("fs");
let https = require("https")
https.createServer({
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem'),
  passphrase: 'YOUR PASSPHRASE HERE'
}, app).listen(PORT)
