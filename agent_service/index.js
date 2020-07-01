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
mongoose.connect("mongodb://localhost/agentdatabase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("AGENT database is up")
}).on("error", ()=>{
  console.log("Error connecting to AGENT database")
})
const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
  console.log(`Listening on AGENT port ${PORT}`)  
})

