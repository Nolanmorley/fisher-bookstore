import React, {Component} from "react";
import "./Authors.css";
import {AuthorDisplay} from "./AuthorDisplay.js";

export default class Authors extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    author: "Nolan Morley"
                },
                {
                    author: "J.K. Rowling"
                }
            ]
        };
    }
    
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}