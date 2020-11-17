import React from 'react';
import '../App.css';
import Movie from "./Movie/Movie";

class BadList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="badColumn">
                <Movie /> 
            </div>
        );
    }
}

export default BadList;
