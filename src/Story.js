import React, { Component } from 'react';

class Story extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="story">
                <img src={this.props.img} alt=""/>
                <div className="content">
                <a href={this.props.url} target="_blank"><h1>{this.props.title}</h1></a>
                <div className="category">{this.props.category}</div>
                </div>
            </div>
        )
    }
}

export default Story;