import React, { Component } from "react";
import firebase from "firebase/app"
import "firebase/auth";
import axios from "axios";
import Firebase, { FirebaseContext } from "../Firebase";
 
class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      password: "",
      email2: "",
      password2: ""
    }
  }



  onSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:5001/movie-recommender-3779d/us-central1/app/users/create', {email: this.state.email, password: this.state.password})
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }


  handleLogin = (e) => {
    e.preventDefault();

    firebase.auth().signInWithEmailAndPassword(this.state.email2, this.state.password2)
    .then((user) => {
      console.log("fuck me wow it worked");
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

  onChangeEmail2 = (e) =>{
    this.setState({
      email2: e.target.value
    })
  }

  onChangePassword2 = (e) =>{
    this.setState({
      password2: e.target.value
    })
  }


 
  render() {
    return (
        <div>
          <form onSubmit={this.onSubmit}>
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

            <input type="submit" value="Sign up"></input>
          </form>

          <form onSubmit={this.handleLogin}>
            <label>Email2: </label>
            <input
              type="text"
              name="Email"
              value={this.state.email2}
              onChange={this.onChangeEmail2}
            />

            <label>Password2: </label>
            <input
              type="password"
              name="Password"
              value={this.state.password2}
              onChange={this.onChangePassword2}
            />

            <input type="submit" value="Login"/>
          </form>
        </div>

    );
  }
}

export default Login;