import React from 'react';

class Logout extends React.Component{

    componentDidMount(){
        localStorage.removeItem("token");
        alert("Logged Out");
    }

    render(){
        return(
            <div>
            </div>
        );
    }
}

export default Logout;