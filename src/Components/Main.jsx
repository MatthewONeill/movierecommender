import React from 'react';
import GenerateMovie from './GenerateMovie';

class Main extends React.Component{

    render(){
        return(
            <div>
                <div className="container">
                    <div className="badColumn">
                    <h1>Bad List</h1>
                    </div>
                    <div className="movieColumn"> 
                    <h1>Movie Recommender</h1>
                    </div>
                    <div className="goodColumn">
                    <h1>Good List</h1>
                    </div>
                </div>

                <div className="container">
                    <GenerateMovie />
                </div>
            </div>
        );
    }
}

export default Main;