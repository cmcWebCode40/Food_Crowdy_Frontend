const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const bulkshareRouter = require("./routers/bulkshareroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/bulkshare", bulkshareRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/bulksharedatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("BULKSHARE database is up")
}).on("error", ()=>{
  console.log("Error connecting to BULKSHARE database")
});
const PORT = process.env.PORT || 3003
// app.listen(PORT, ()=>{
//   console.log(`Listening on BULKSHARE port ${PORT}`)  
// })
let server = require( 'https' ).createServer( app );

server.listen( PORT , function() {
  console.log(`Listening on BULKSHARE port ${PORT}`)
} );

