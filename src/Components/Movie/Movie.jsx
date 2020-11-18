import React from 'react';
import "./Movie.css";

class Movie extends React.Component{
    
    render(){
        return(
            <div className="movieContainer"> 
                <div className="movieMain">
                    <div className="movieTitle">
                        {this.props.title}
                    </div>
                    <div className="movieImage">
                        <img src={`https://image.tmdb.org/t/p/w500${this.props.image}`} alt="No Poster Found" style={{width: "100px"}}/>
                    </div>
                    <div className="movieReleaseDate">
                        {this.props.releaseDate}
                    </div>
                </div>
            </div>
        );
    }
}

export default Movie;