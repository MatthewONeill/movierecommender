import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/test">Test</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;