import React from 'react';
import '../App.css';
import Movie from "./Movie/Movie";

class BadList extends React.Component{
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
        return this.state.posts.map(currentMovie => {
            return <Movie movie={currentMovie} deleteMovie={this.deleteMovie} key={currentMovie._id} />
        })
    }

    render(){
        return(
            <div className="badColumn">
                <Movie /> 
            </div>
        );
    }
}

export default BadList;
