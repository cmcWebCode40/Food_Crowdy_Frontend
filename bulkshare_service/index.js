const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const bulkshareRouter = require("./routers/bulkshareroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/bulkshare", bulkshareRouter)
mongoose.connect("mongodb://localhost/bulksharedatabase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("BULKSHARE database is up")
}).on("error", ()=>{
  console.log("Error connecting to BULKSHARE database")
});
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
  console.log(`Listening on BULKSHARE port ${PORT}`)  
})

