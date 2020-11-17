import React from 'react';
import "../App.css";

const Movie = props => (
    <div className="container" style={{display: "flex", flexDirection: "column", paddingBottom: "20px"}} >
        <div className="movieTitle">
            Title
        </div>
        <div className="movieImage">
            Image
        </div>
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
)

class GenerateMovie extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="movieColumn">
                <Movie />
                <div className="buttons">
                    <button className="noButton">No</button>
                    <button className="yesButton">Yes</button>
                </div>
            </div>
        );
    }
}

export default GenerateMovie;