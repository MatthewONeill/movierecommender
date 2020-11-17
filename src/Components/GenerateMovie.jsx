import React from 'react';
import "../App.css";

class GenerateMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movieColumn">
                <p>Generated Movie</p>
                <div className="buttons">
                    <button className="noButton">No</button>
                    <button className="yesButton">Yes</button>
                </div>
            </div>
        );
    }
}

export default GenerateMovie;