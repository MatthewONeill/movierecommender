const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

//Firebase initialization
var serviceAccount = require("./movie-recommender-3779d-firebase-adminsdk-lw0o8-98f56ee455.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movie-recommender-3779d.firebaseio.com"
});
const adb = admin.database();

//Add to the Bad List
app.post('/badlist/add', (req,res) => {
  adb.ref('badMovies').push(req.body);
  return res.sendStatus(200);
});

//Add to the Good List
app.post('/goodlist/add', (req,res) => {
  adb.ref('goodMovies').push(req.body);
  return res.sendStatus(200);
});

//Return the Bad List
app.get('/badlist', (req,res) => {
  let ref = adb.ref('badMovies');

  ref.on("value", function(snapshot){
    return res.send(snapshot.val()).status(200);
  }, function (error){
    console.log("Error:" + error.code);
    return res.sendStatus(400);
  });
});

//Return the Good List
app.get('/goodlist', (req,res) => {
  let ref = adb.ref('goodMovies');

  ref.on("value", function(snapshot){
    return res.send(snapshot.val()).status(200);
  }, function (error){
    console.log("Error:" + error.code);
    return res.sendStatus(400);
  });
});


exports.app = functions.https.onRequest(app);
//Note: run with 'npm run serve'