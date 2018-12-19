const User = require("../models/UserModel");
const tokenForUser = require('../services/token').tokenForUser;
const hash = require('../services/hash').hash;

function create(req, res, next){
    const { username, password } = req.body;
    const u = username;

    //if no username or password was supplied return an error
    if(!username || !password){
        return res.status(422)
        .json({ error: 'You must provide a username and password'});
    }
    console.log("Look for a user with the username", username);
    User.findOne({ username: u}).exec()
    .then((existingUser)=>{
        //if the user exists return an error on sign up
        if(existingUser){
            console.log("This username is already being used");
            return res.status(422).json({ error: "Username is already in use."});
        }
        console.log("this username is free to use");
        saveUser(username, password, (token)=>{
            res.json(token);
        });
    })
    .catch(err=> next(err));
}

function saveUser(username, password, done){
    hash(password, null, function(hashedPassword){
        //create a new user wiht the supplied username and the hashed password
        const user = new User({ username, password: hashedPassword });
        console.log('saving the user');
        user.save()
        .then(u=>{
            console.log('user has been saved to database');
            done({ token: tokenForUser(u) });
        });
    });
}

exports.create = create;