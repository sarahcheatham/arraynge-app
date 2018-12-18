const path = require('path');
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// const userRoutes = require('./routes/UserRoutes');
// const sessionRoutes = require('./routes/SessionRoutes');
// const authenticationRoutes = require('./routes/AuthenticationRoutes');

mongoose.set("debug", true);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.mongodburi).then(
    ()=>{
        console.log('mongoose connected successfully :)');
        
        startWebServer();
    },
    err =>{
        console.log('mongoose did not connect', err);
    }
);

function startWebServer(){
    const app = express();
    
    app.get('/api/publicinformation', function(req, res){
        res.send('anyone can see this');
    });

    //not secure
    app.use(express.static('public'));
    app.use(bodyParser.json());
    
    const port = process.env.PORT || 3001;

    app.listen(port, ()=>{
        console.log(`Listening on port: ${port}`);
    })
}




