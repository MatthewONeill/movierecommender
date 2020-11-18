import Axios from 'axios';
import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';
import axios from 'axios';

class GoodList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movies: []
        }
    }

    deleteMovie = (id) => {
        //delete from database
    }

    movieList(){
        return this.props.movies.map(currentMovie => {
            return <Movie {...currentMovie} deleteMovie={this.deleteMovie} />
        })
    }

    render(){
        return(
            <div className="goodColumn">
                {this.movieList()}
            </div>
        );
    }
}

export default GoodList;