import React, { Component } from 'react';

class Searchbar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="search">
                <input type="text" id="search-bar" name="search-bar" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
        )
    }
}

export default Searchbar;