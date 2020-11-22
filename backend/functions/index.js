const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session')
app.use(session({ secret: 'node run serve', cookie: { maxAge: 600000 }}))
app.use(cors({ origin: true }));
require('dotenv').config();

//Firebase initialization
//var serviceAccount = require(process.env.FIREBASE_CONNECTION);
var serviceAccount = "movie-recommender-3779d-firebase-adminsdk-lw0o8-98f56ee455.json"; //For my testing purposes because im lazy.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movie-recommender-3779d.firebaseio.com"
});
const adb = admin.database();

//Add user profiles
app.post('/users/create', (req,res) => {
  admin.auth().createUser(req.body)
    .then(function(userRecord) {
      console.log('Successfully created new user:', userRecord.uid);
      req.session.userID = userRecord.uid;
      adb.ref(userRecord.uid);
      res.sendStatus(200);
    })
    .catch(function(error) {
      console.log('Error creating new user:', error);
      res.sendStatus(400);
    });
});

//Log in to a user profile
//The actual login verification will be done clientside
//This route should only be called when the frontend has done its firebase login
app.post('/users/login', (req,res) => {
  admin.auth().getUserByEmail(req.body.email)
  .then(function(userRecord) {
    console.log('Successfully fetched user data:', userRecord.toJSON());
    req.session.userID = userRecord.uid;
    req.session.loggedIn = true;
    res.sendStatus(200);
  })
  .catch(function(error) {
   console.log('Error fetching user data:', error.errorInfo);
   res.sendStatus(400);
  });
});

//Add to the Bad List
app.post('/badlist/add', (req,res) => {
  if(req.session.loggedIn){
    adb.ref('badMovies').child(req.session.userID).push(req.body);
    return res.sendStatus(200);
  }else{
    console.log("User not logged in. No data posted.");
    return res.send("User not logged in.").status(400);
  }
});

//Add to the Good List
app.post('/goodlist/add', (req,res) => {
  if(req.session.loggedIn){
  adb.ref('goodMovies').child(req.session.userID).push(req.body);
  return res.sendStatus(200);
  }else{
    console.log("User not logged in. No data posted.");
    return res.send("User not logged in.").status(400);
  }
});

//Return the Bad List
app.get('/badlist', (req,res) => {
  if(req.session.loggedIn){
    let ref = adb.ref('badMovies').child(req.session.userID);

    ref.limitToLast(10).once("value", (snapshot) => {
      let array = [];
      snapshot.forEach((child) => {
        array.push((child.val()));
      })
      return res.send(array).status(200);
    }, (error) => {
      console.log("Error:" + error.code);
      return res.sendStatus(400);
    });
  }else{
    return res.send("User not logged in.").status(400);
  }
});

//Return the Good List
app.get('/goodlist', (req,res) => {
  if(req.session.loggedIn){
    let ref = adb.ref('goodMovies').child(req.session.userID);

    ref.limitToLast(10).once("value", (snapshot) => {
      let array = [];
      snapshot.forEach((child) => {
        array.push((child.val()));
      })
      return res.send(array).status(200);
    }, (error) => {
      console.log("Error:" + error.code);
      return res.sendStatus(400);
    });
  }else{
    return res.send("User not logged in.").status(400);
  }
});

//Allows the firebase thing to do it's stuff
exports.app = functions.https.onRequest(app);
//Note: run with 'npm run serve'