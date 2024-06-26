import "./style.css";

import React from "react";

import placeholder from "../../assets/placeholder.jpg";

function BookCard() {
    return (
        <article className="book-card">
            <img src={placeholder} alt="Book Image" width="250" height="250" />
            <div className="book-info">
                <h3 className="book-name">Book Name</h3>
                <p className="book-category">Computers</p>
                <p className="book-authors">Author</p>
            </div>
        </article>
    );
}

export default BookCard;
