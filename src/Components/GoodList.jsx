import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';

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
        return this.state.posts.map(currentMovie => {
            return <Movie movie={currentMovie} deleteMovie={this.deleteMovie} key={currentMovie._id} />
        })
    }

    render(){
        return(
            <div className="goodColumn">
                <Movie />
            </div>
        );
    }
}

export default GoodList;