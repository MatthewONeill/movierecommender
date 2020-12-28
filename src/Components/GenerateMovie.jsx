import React from 'react';
import axios from 'axios';
import "../App.css";
import GoodList from './GoodList';
import BadList from './BadList';

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
            goodList: [],
            badList: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/badlist", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
        .then(response => {
            console.log(response)
            this.setState({
                badList: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })

        axios.get("http://localhost:5000/goodlist", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then(response => {
                this.setState({
                    goodList: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    generateRandomMovie = async() => {
        
        let random = Math.floor((Math.random() * 20) + 2000); //random year for primary release year
        let random2 = Math.floor((Math.random() * 30) + 1); // random page starting from 1
        let random3 = Math.floor((Math.random() * 19)); //random item from the page

        await axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+process.env.REACT_APP_API_KEY + '&sort_by=vote_average.gte=0&primary_release_year=' + random + '&page=' + random2)
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

    sendToBadList = async() => {
        const movie = {
            title: this.state.title,
            image: this.state.image,
            releaseDate: this.state.releaseDate
        }

        await axios.post('http://localhost:5000/badlist/add', {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },    
        }, movie)
            .catch((error) => {
                console.log(error);
            })

        this.refreshBadList();
    }

    sendToGoodList = async() => {
        const movie = {
            title: this.state.title,
            image: this.state.image,
            releaseDate: this.state.releaseDate
        }

         await axios.post('http://localhost:5000/goodlist/add', {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
         }, movie)
            .catch((error) => {
                console.log(error);
            })

         this.refreshGoodList();
    }

    refreshBadList = async() => {
        await axios.get("http://localhost:5000/badlist", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then(response => {
                this.setState({
                    badList: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        
        this.generateRandomMovie();
    }

    refreshGoodList = async() => {
        await axios.get("http://localhost:5000/goodlist", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then(response => {
                this.setState({
                    goodList: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        this.generateRandomMovie();
    }

    render(){
        return(
            <div className="container">
                <BadList movies={this.state.badList}/>

                <div className="movieColumn">
                    <button className="newMovieButton" style={{marginBottom: "20px"}} onClick={this.generateRandomMovie}>New Movie</button>
                    
                    <div className="container" style={{display: "flex", flexDirection: "column", paddingBottom: "20px"}} >
                        <div className="movieTitle">
                            {this.state.title}
                        </div>
                        <div className="movieImage">
                            <img src={`https://image.tmdb.org/t/p/w500${this.state.image}`} alt="No Poster Found"/>
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
                            Rating (/10): {this.state.movieRating}
                        </div>
                    </div>
                    
                    <div className="buttons">
                        <button className="noButton" onClick={this.sendToBadList}>No</button>
                        <button className="yesButton" onClick={this.sendToGoodList}>Yes</button>
                    </div>
                </div>

                <GoodList movies={this.state.goodList}/>
            </div>
        );
    }
}

export default GenerateMovie;