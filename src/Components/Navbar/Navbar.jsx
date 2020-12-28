import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;