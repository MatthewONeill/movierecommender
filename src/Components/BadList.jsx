import React from 'react';
import '../App.css';
import Movie from "./Movie/Movie";

class BadList extends React.Component{

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
            console.log("No movies in Bad List");
        }
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
