import "./BookCard.css";

import React from "react";

import placeholder from "../../assets/placeholder.jpg";

function BookCard() {
    return (
        <article className="book-card">
            <img src={placeholder} alt="Book Image" width="200" height="200" />
            <h3>Template</h3>
            <p>Author</p>
        </article>
    );
}

export default BookCard; 
