import React, { Component } from "react";
import firebase from "firebase/app"
import "firebase/auth";
import axios from "axios";
 
class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
    }
  }

  handleLogin = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
      axios.post('http://localhost:5001/movie-recommender-3779d/us-central1/app/users/login', {email: this.state.email})
    })
    .catch((error) => {
        console.log(error.message);
    })
  }

  onChangeEmail = (e) =>{
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword = (e) =>{
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
        <form onSubmit={this.handleLogin}>
          <label>Email: </label>
          <input
            type="text"
            name="Email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />

          <label>Password: </label>
          <input
            type="password"
            name="Password"
            value={this.state.password}
            onChange={this.onChangePassword}
          />

          <input type="submit" value="Login"/>
        </form>
    );
  }
}

export default Login;