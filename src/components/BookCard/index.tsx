import "./style.css";

import React from "react";

import placeholder from "@/assets/placeholder.jpg";

import { Props } from "./types";

function BookCard({ bookInfo }: Props) {
    const processedAutors = bookInfo.authors?.join(", ");
    const thumbnailLink = bookInfo.thumbnailLink?.replace(/^http/g, "https");

    return (
        <article className="book-card">
            <img
                className="book-image"
                src={thumbnailLink || placeholder}
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
