import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';


class GoodList extends React.Component{

    deleteMovie = (id) => {
        //delete from database
    }

    movieList(){
        try{
            return this.props.movies.map((currentMovie, index) => {
                return <Movie {...currentMovie} deleteMovie={this.deleteMovie} key={index}/>
            })
        }
        catch{
            console.log("No movies in Good List")
        }
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