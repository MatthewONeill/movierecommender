import React from 'react';
import "../App.css";
import Movie from './Movie/Movie';

class GoodList extends React.Component{
    constructor(props){
        super(props);
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