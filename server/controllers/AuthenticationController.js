const User = require("../models/UserModel");
const jwt = require("jwt-simple");

function authentication(req, res, next){
    if(req.path.split("/"[1] !== "api")){
        return next();
    }
    //get the token from the header
    const tokenString = req.header("authorization");
    if(!tokenString){
        return res.send("Invalid credintials");
    }
    const tokenObject = jwt.decode(tokenString, process.env.SECRET);
    //decrypt the token
    //find user by id
    User.findById(tokenObject.userId, function(err, user){
        if(err){
            return res.send("Error");
        }
        if(user){
            req.user = user;
            return next();
        }
        return res.send("Invalid credintals")
    });
}
exports.authentication = authentication;