import React from 'react';
import '../App.css';
import Movie from "./Movie/Movie";

class BadList extends React.Component{
    
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
            <div className="badColumn">
                {this.movieList()}
            </div>
        );
    }
}

export default BadList;
