import React from 'react';
import "./Movie.css";

class Movie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movieContainer">
                
                <div className="movieMain">
                    <div className="movieTitle">
                        Title
                    </div>
                    <div className="movieImage">
                        Image
                    </div>
                </div>
                
                <div className="movieInfo">
                    <div className="movieGenres">
                        Genres
                    </div>
                    <div className="movieOverview">
                        Overview
                    </div>
                    <div className="movieReleaseDate">
                        Release Date
                    </div>
                    <div className="movieRuntime">
                        Runtime
                    </div>
                    <div className="movieVoteAverage">
                        Movie Rating
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Movie;