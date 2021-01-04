import React from 'react';
import axios from 'axios';

class Signup extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }

    onSubmit = (e) =>{
        e.preventDefault();
    
        var passwordHash = require('password-hash');

        var hashedPassword = passwordHash.generate(this.state.password);

        axios.post('http://localhost:5000/users/create', {email: this.state.email, password: hashedPassword})
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
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

    render(){
        return(
            <form onSubmit={this.onSubmit} className="loginForm">
                <label style={{fontSize: "24px", marginBottom: "20px"}}>Signup</label>
                <label>Email</label>
                <input 
                type="text" 
                name="Email" 
                value={this.state.email}
                onChange={this.onChangeEmail}
                />


                <label>Password</label>
                <input 
                type="password" 
                name="Password" 
                value={this.state.password}
                onChange={this.onChangePassword}
                />

                <input type="submit" value="Sign up" className="submitButton"></input>
          </form>
        );
    }
}

export default Signup;