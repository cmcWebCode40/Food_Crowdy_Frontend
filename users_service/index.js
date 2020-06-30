const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/usersroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/users", usersRouter)
mongoose.connect("mongodb://localhost/userdatabase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("USER database is up")
}).on("error", ()=>{
  console.log("Error connecting to USER database")
})
const PORT = process.env.PORT || 6001
app.listen(PORT, ()=>{
  console.log(`Listening on USER port ${PORT}`)  
})

