import React from 'react';
import axios from 'axios';
import "../App.css";

class GenerateMovie extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            image: "",
            overview: "",
            releaseDate: "",
            runtime: 0,
            movieRating: 0,
        }
    }

    generateRandomMovie = () => {
        
        let random = Math.floor((Math.random() * 20) + 2000);
        let random2 = Math.floor((Math.random() * 30) + 1);
        let random3 = Math.floor((Math.random() * 19));

        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.REACT_APP_API_KEY + '&sort_by=vote_average.gte=0&primary_release_year=' + random + '&page=' + random2)
            .then(response => {
                this.setState({
                    title: response.data.results[random3].title,
                    image: response.data.results[random3].poster_path,
                    overview: response.data.results[random3].overview,
                    releaseDate: response.data.results[random3].release_date,
                    runtime: response.data.results[random3].runtime,
                    movieRating: response.data.results[random3].vote_average
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render(){
        return(
            <div className="movieColumn">
                <button className="newMovieButton" style={{marginBottom: "20px"}} onClick={this.generateRandomMovie}>New Movie</button>
                
                <div className="container" style={{display: "flex", flexDirection: "column", paddingBottom: "20px"}} >
                    <div className="movieTitle">
                        {this.state.title}
                    </div>
                    <div className="movieImage">
                        Image
                    </div>
                    <div className="movieOverview">
                        {this.state.overview}
                    </div>
                    <div className="movieReleaseDate">
                        Release Date: {this.state.releaseDate}
                    </div>
                    <div className="movieRuntime">
                        Length (Mins): {this.state.runtime}
                    </div>
                    <div className="movieVoteAverage">
                        Rating: {this.state.movieRating}
                    </div>
                </div>
                
                <div className="buttons">
                    <button className="noButton">No</button>
                    <button className="yesButton">Yes</button>
                </div>
            </div>
        );
    }
}

export default GenerateMovie;