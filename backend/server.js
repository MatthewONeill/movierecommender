const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const session = require('express-session')
const port = 3000; //Might need changing
const dotenv = require('dotenv').config();

app.use(session({ resave: true, saveUninitialized:true, secret: 'node run serve', cookie: { maxAge: 600000 }}))
app.use(cors({ origin: true }));

//Mongoose connection
mongoose.connect(process.env.ATLAS_CONNECTION, {useNewUrlParser: true});
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.post('/users/create', createUser);
app.post('/users/login', loginUser);
app.post('/users/logout', logoutUser);
app.post('/badlist/add', badAdd);
app.post('/goodlist/add', goodAdd);
app.get('/badlist', getBad);
app.get('/goodlist', getGood);

function createUser(req,res){
    console.log("Placeholder.\n");
}
function loginUser(req,res){
    console.log("Placeholder.\n");
}
function logoutUser(req,res){
    console.log("Placeholder.\n");
}
function badAdd(req,res){
    console.log("Placeholder.\n");
}
function goodAdd(req,res){
    console.log("Placeholder.\n");
}
function getBad(req,res){
    console.log("Placeholder.\n");
}
function getGood (req,res){
    console.log("Placeholder.\n");
}

db.once('open', () => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    })
})