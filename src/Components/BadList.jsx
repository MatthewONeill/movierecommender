import React from 'react';
import '../App.css';
import Movie from "./Movie/Movie";
import axios from "axios";

class BadList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5001/movie-recommender-3779d/us-central1/app/badlist")
            .then(response => {
                this.setState({
                    movies: response.data
                })
            })
    }

    deleteMovie = (id) => {
        //delete from database
    }

    movieList(){
        return this.state.movies.map(currentMovie => {
            return <Movie {...currentMovie} deleteMovie={this.deleteMovie} />
        })
    }

    render(){
        return(
            <div className="badColumn">
                {this.movieList()}
            </div>
        );
    }
}

export default BadList;
