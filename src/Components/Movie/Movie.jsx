import React from 'react';
import "./Movie.css";

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container">
                <div className="movieImage">
                    Image
                </div>
            </div>
        );
    }
}

export default Movie;