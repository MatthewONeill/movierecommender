const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const session = require('express-session')
const port = 5000; //Might need changing
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
let Users = require("./userModel");
const userModel = require('./userModel');

app.use(session({ resave: true, saveUninitialized:true, secret: 'node run serve', cookie: { maxAge: 600000 }}))
app.use(cors({ origin: true }));
app.use(express.json()); 

//Mongoose connection
const uri = process.env.ATLAS_CONNECTION
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if(!token){
        res.send('Token not found').status(400);
    }else{
        jwt.verify(token, "pickASecret", (err, decoded) =>{
            if(err){
                res.json({auth: false, message: "Failed to authenticate."});
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
};

app.post('/users/create', createUser);
app.post('/users/login', loginUser);
app.post('/users/logout', logoutUser);
app.post('/badlist/add', verifyJWT, badAdd);
app.post('/goodlist/add', verifyJWT, goodAdd);
app.get('/badlist', verifyJWT, getBad);
app.get('/goodlist', verifyJWT, getGood);

function createUser(req,res){
    let body = req.body
    let newUser = new userModel({email: body.email, password: body.password, goodlist: [], badlist: []});
    newUser.save((err) => {
        if(err){
            throw err;
        }
        req.session.loggedIn = true;
        req.session.userID = newUser._id;

        let id = newUser._id;
        const token = jwt.sign({id}, "pickASecret", {expiresIn: 300}); 
        

        console.log("User saved.\n");
        return res.json({auth: true, token: token, result: newUser});
    });
}

function loginUser(req,res){
    let body = req.body;
    userModel.find({email: body.email}, (err, results) => {
        if(err || results.length == 0){
            console.log('Could not find user.\n');
            return res.sendStatus(401);
        }
        if(results[0].password == body.password){
            req.session.userID = results[0]._id;
            req.session.loggedIn = true;

            let id = results[0]._id;
            const token = jwt.sign({id}, "pickASecret", {expiresIn: 300});

            console.log('Logged in user.\n');
            return res.json({auth: true, token: token, result: results[0]});
        }else{
            console.log('Invalid Password.\n');
            return res.sendStatus(401);
        }
    });
}

function logoutUser(req,res){
    if(req.session.loggedIn){
        req.session.destroy((err) => {
            if(err){
                console.log("Error deleting session.\n");
                return res.sendStatus(400);
            }else{
                console.log("Logged out user.\n");
                return res.sendStatus(200);
            }
        });
    }else{
        console.log("No user logged in.\n");
        return res.sendStatus(400);
    }
}

function badAdd(req,res){
    //if(req.session.loggedIn){
        let body = req.body;
        userModel.findOne({_id: req.userId}, (err,results) =>{
            results.badlist.push(body);
            results.save((err,results) =>{
                console.log("List Updated.");
                return res.sendStatus(200);
            });
        });
    //}else{
        //console.log("User not logged in.");
        //return res.send("User not logged in.").status(400);
    //}
}
function goodAdd(req,res){
    //if(req.session.loggedIn){
        let body = req.body;
        userModel.findOne({_id: req.userId}, (err,results) =>{
            results.goodlist.push(body);
            results.save((err,results) =>{
                console.log("List Updated.");
                return res.sendStatus(200);
            });
        });
    //}else{
        //console.log("User not logged in.");
        //return res.send("User not logged in.").status(400);
    //}
}
function getBad(req,res){
    //if(req.session.loggedIn){
        userModel.findOne({_id: req.userId}, (err,results) =>{
            if(err){
                console.log('Could not find user.\n');
                return res.sendStatus(401);
            }
            let movies = results.badlist;
            if(movies.length <= 10){
                return res.send(movies).status(200);
            }else{
                return res.send(movies.slice(Math.max(movies.length - 10, 1))).status(200);
            }
        });
    //}else{
        //return res.send("User not logged in.").status(400);
    //}
}
function getGood (req,res){
    //if(req.session.loggedIn){
        userModel.findOne({_id: req.userId}, (err,results) =>{
            if(err){
                console.log('Could not find user.\n');
                return res.sendStatus(401);
            }
            let movies = results.goodlist;
            if(movies.length <= 10){
                return res.send(movies).status(200);
            }else{
                return res.send(movies.slice(Math.max(movies.length - 10, 1))).status(200);
            }
        });
    //}else{
        //return res.send("User not logged in.").status(400);
    //}
}

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    })
})