import React from 'react';
import '../App.css';

class BadList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="badColumn">
                <p>First Bad Movie</p>
                <p>Second Bad Movie</p>
            </div>
        );
    }
}

export default BadList;
