import React, { Component } from "react";
import LoginModal from "react-login-modal";
import firebase from "firebase/app"
import "firebase/auth";
import axios from "axios";
import Firebase, { FirebaseContext } from "../Firebase";
 
class Login extends Component {
  handleSignup = (email, password) => {
    axios.post('http://localhost:5001/movie-recommender-3779d/us-central1/app/users/create', {email: email, password: password})
      .catch((error) => console.log(error));
  };
  handleLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {

    })
    .catch((error) => {
        console.log(error.message);
    })
  }
 
  render() {
    return (

        <LoginModal
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
        />

    );
  }
}

export default Login;