import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';


class GoodList extends React.Component{

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