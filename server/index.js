// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
const path = require('path');
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");
const sessionRoutes = require("./routes/SessionRoutes");
const authenticationRoutes = require("./routes/AuthenticationRoutes");
const studentRoutes = require("./routes/StudentRoutes");
const classdataRoutes = require("./routes/ClassDataRoutes");
const arrayngmentRoutes = require("./routes/ArrayngementRoutes");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
//notice you need to update this with your own database

mongoose.connect(process.env.mongodburi).then(
  () => { 
    console.log("mongoose connected successfully");
   
    startWebServer();
  },
  err => {
    console.log("mongoose did not connect",err);
   }
);

function startWebServer(){

  const app = express();

  app.get("/api/publicinformation", function (req, res) {
    res.send("Anyone can see this");
  });
  //not secure
  app.use(express.static("public"));
  app.use(bodyParser.json());
  app.use(userRoutes);
  app.use(sessionRoutes);
  app.use(authenticationRoutes);
  //secure
  app.use(classdataRoutes);
  app.use(studentRoutes);
  app.use(arrayngmentRoutes)
  //deployment
  app.use(express.static(path.join(__dirname + "arraynge" + "build" )))

  app.get("/api/canigetthis", function (req, res) {
    res.send("You got the data. You are authenticated");
  });
  app.get("/api/users/:id", function (req, res){
    res.send(`${req.user.userId}`)
  })
  app.get("/api/hey", function (req, res){
    res.send(`${req.user._id}`)
  })
  app.get("/api/scores", function (req, res) {
    res.send(`${req.user.firstName} ${req.user.lastName}'s Class List`)
  });
  app.get("/api/welcome", function(req, res){
    res.send(`Welcome ${req.user.firstName} ${req.user.lastName}!`)
  });
  app.get("/api/classdata", function(req, res){
    res.send(`${req.classdata.gradelevel} ${req.classdata.subject} ${req.classdata.userId}`)
  });
  app.get("/api/studentdata", function(req, res){
    res.send(req.body)
  });
  app.get("/api/studentdata/:id", function(req, res){
    res.send(req.body)
  })
  // app.put("/api/studentdata/:id", function (req, res){
  //   res.send(req.body)
  // })
  // app.get("/api/arrayngement", function(req, res){
  //   res.send(`${req.student}`)
  // });
  //database stuff goes here for the user data that is saved in the database that they are trying to retreive

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
  });
  //deployment
  app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname + "arraynge" + "build" + "index.html"));
  })
  //heroku injects the port number into the PORT env value
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Listening on port:${port}`);
  });
}




