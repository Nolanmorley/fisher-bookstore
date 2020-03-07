import React, { Component} from "react";
import "./Books.css";
import {BookDisplay} from "./BookDisplay.js";

export default class Books extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Harry Potter and the Sorcerer's Stone",
                    author: "J.K. Rowling",
                    isbn: "978-8700631625"
                },
                {
                    id: 4,
                    title: "Harry Potter and the Chamber of Secrets",
                    author: "J.K. Rowling",
                    isbn: "978-0605928183"
                },
                {
                    id: 5,
                    title: "Harry Potter and the Prisoner of Azkaban",
                    author: "J.K. Rowling",
                    isbn: "978-9994030149"
                },
                {
                    id: 6,
                    title: "Harry Potter and the Goblet of Fire",
                    author: "J.K. Rowling",
                    isbn: "978-8498386639"
                },
                {
                    id: 7,
                    title: "Harry Potter and the Order of the Pheonix",
                    author: "J.K. Rowling",
                    isbn: "978-8498383621"
                },
                {
                    id: 8,
                    title: "Harry Potter and the Sorcerer's Stone",
                    author: "J.K. Rowling",
                    isbn: "978-8700631625"
                }
            ]
        };
    }
    
    render() {
        return (
            <div className="Books">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}


