import "./style.css";

import React from "react";

import placeholder from "../../assets/placeholder.jpg";

type Book = {
    id: string;
    title: string;
    authors: string[] | undefined;
    category: string | undefined;
    thumbnailLink: string | undefined;
};

type Props = {
    bookInfo: Book;
};

function BookCard({ bookInfo }: Props) {
    const processedAutors = bookInfo.authors?.join(", ");

    return (
        <article className="book-card">
            <img
                className="book-image"
                src={bookInfo.thumbnailLink || placeholder}
                alt="Book Image"
                width="200"
                height="250"
            />
            <div className="book-info">
                <h3 className="book-name">{bookInfo.title}</h3>
                <p className="book-category">{bookInfo.category}</p>
                <p className="book-authors">{processedAutors}</p>
            </div>
        </article>
    );
}

export default BookCard;
