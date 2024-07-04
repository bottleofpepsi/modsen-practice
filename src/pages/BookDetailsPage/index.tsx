import "./style.css";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchBookById } from "@/api";
import LoadingIndicator from "@/components/LoadingIndicator";
import ReturnButton from "@/components/ReturnButton";
import { DetailedBook } from "@/types";
import { getDateFromString, setDelimeter, uniqueCategories } from "@/utils";

function BookDetailsPage() {
    const { id } = useParams();
    const [bookDetails, setBookDetails] = useState({} as DetailedBook);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const imageLink = (
        bookDetails.largeImageLink ||
        bookDetails.mediumImageLink ||
        bookDetails.thumbnailLink
    )?.replace(/^http(?!s)/g, "https");

    const imageLoaded = () => setIsLoading(false);

    if (error) {
        throw new Error("Book details fetching failed!");
    }

    useEffect(() => {
        fetchBookById(id)
            .then((book: DetailedBook) => {
                setBookDetails(book);
            })
            .catch(() => setError(true));
    }, []);

    return (
        <main className="details-page">
            <nav className="details-nav">
                <ReturnButton />
            </nav>
            {isLoading && <LoadingIndicator />}
            <article
                style={isLoading ? { display: "none" } : {}}
                className="details-page-book"
            >
                <img src={imageLink} onLoad={imageLoaded} />
                <div className="details-page-book-info">
                    <header className="details-page-book-info-header">
                        <h1 className="details-page-book-info-title">
                            {bookDetails.title}
                        </h1>
                        <span className="details-page-book-info-authors-date">
                            {bookDetails.authors &&
                                setDelimeter(bookDetails.authors, ", ")}
                            {bookDetails.authors &&
                                bookDetails.publishedDate &&
                                ", "}
                            {bookDetails.publishedDate &&
                                getDateFromString(
                                    bookDetails.publishedDate
                                )?.[0]}
                        </span>
                    </header>
                    <div className="details-page-book-info-properties">
                        {bookDetails.publisher && (
                            <p>Publisher: {bookDetails.publisher}</p>
                        )}
                        {bookDetails.allCategories && (
                            <p>{uniqueCategories(bookDetails.allCategories)}</p>
                        )}
                        {bookDetails.pageCount && (
                            <p>Page count: {bookDetails.pageCount}</p>
                        )}
                        {bookDetails.isbn && <p>ISBN: {bookDetails.isbn}</p>}
                    </div>
                    <p className="details-page-book-info-description">
                        {bookDetails.description &&
                            bookDetails.description?.replace(/<.+?>/g, " ")}
                    </p>
                </div>
            </article>
        </main>
    );
}

export default BookDetailsPage;
