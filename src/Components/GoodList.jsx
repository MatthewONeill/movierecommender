import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';

class GoodList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movies: [
                {
                    title: "11:55",
                    image: "/cq8YSZwPXK0M4HwofurhNOfUaFt.jpg",
                    releaseDate: "2008-10-23"
                }
            ]
        }
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
            <div className="goodColumn">
                {this.movieList()}
            </div>
        );
    }
}

export default GoodList;