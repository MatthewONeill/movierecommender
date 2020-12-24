import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;