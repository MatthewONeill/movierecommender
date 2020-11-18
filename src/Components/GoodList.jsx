import React from 'react';
import "../App.css";

class GoodList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="goodColumn">
                <p>First Good Movie</p>
                <p>Second Good Movie</p>
            </div>
        );
    }
}

export default GoodList;