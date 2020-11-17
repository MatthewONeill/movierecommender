const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));

//Firebase initialization
var serviceAccount = require("./movie-recommender-3779d-firebase-adminsdk-lw0o8-91f08e72f0.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movie-recommender-3779d.firebaseio.com"
});
const adb = admin.database();

app.post('/createuser', (req, res) => {
    let ref = adb.ref();
    let userRef = ref.child('users');
    userRef.set(req.body);
    return res.status(200);
});

exports.app = functions.https.onRequest(app);
//Note: run with 'node run serve'