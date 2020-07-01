const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/usersroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/users", usersRouter)
// mongoose.connect("mongodb://localhost/deliverydatabase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
// mongoose.connection.once("open", ()=>{
//   console.log("DELIVERIES database is up")
// }).on("error", ()=>{
//   console.log("Error connecting to DELIVERIES database")
// })
const PORT = process.env.PORT || 3004
app.listen(PORT, ()=>{
  console.log(`Listening on DELIVERIES port ${PORT}`)  
})

