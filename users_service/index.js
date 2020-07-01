const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const usersRouter = require("./routers/usersroute")
const mongoose = require("mongoose")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use("/users", usersRouter)
mongoose.connect("mongodb+srv://accelerar:accelerar1@cluster0.elggi.mongodb.net/userdatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.once("open", ()=>{
  console.log("USER database is up")
}).on("error", ()=>{
  console.log("Error connecting to USER database")
})
const PORT = process.env.PORT || 3006
// app.listen(PORT, ()=>{
//   console.log(`Listening on USER port ${PORT}`)  
// })
let server = require( 'https' ).createServer( app );

server.listen( PORT , function() {
  console.log(`Listening on USER port ${PORT}`)
} );
