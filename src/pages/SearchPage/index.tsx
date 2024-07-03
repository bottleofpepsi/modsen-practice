import "./style.css";

import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { fetchBooksByQuery } from "../../api";
import BookCard from "../../components/BookCard";
import Header from "../../components/Header";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadMoreButton from "../../components/LoadMoreButton";
import SearchResults from "../../components/SearchResults";
import { PAGINATION_STEP } from "../../constants";
import { Book, Books, SearchParams } from "../../types";
import { filterBooks } from "../../utils";

export const BookCountContext = createContext(0);
export const SetIndexContext = createContext(() => {});

function SearchPage() {
    const initialParams: SearchParams = {
        query: "programming",
        category: "",
        sorting: "relevance",
        startIndex: 0,
    };

    const [results, setResults] = useState<Book[]>([]);
    const [searchParams, setSearchParams] = useState(initialParams);
    const [booksFound, setBooksFound] = useState(0);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (error) {
        throw new Error();
    }

    useEffect(() => {
        setIsLoading(true);
        if (!searchParams.startIndex) {
            setResults([]);
        }
        fetchBooksByQuery(searchParams)
            .then((data: Books) => {
                const books = filterBooks(data.books);
                if (!searchParams.startIndex) {
                    setResults(books);
                    setBooksFound(data.total);
                } else {
                    setResults([...results, ...books]);
                }
            })
            .catch(() => setError(true))
            .finally(() => setIsLoading(false));
    }, [searchParams]);

    return (
        <>
            <Header params={searchParams} setParams={setSearchParams} />
            <BookCountContext.Provider value={booksFound}>
                <SearchResults>
                    {results.map((book) => (
                        <Link
                            className="book-link"
                            to={`/${book.id}`}
                            key={book.id + book.title + book.authors}
                        >
                            <BookCard bookInfo={book} />
                        </Link>
                    ))}
                </SearchResults>
            </BookCountContext.Provider>
            {isLoading && <LoadingIndicator />}
            {searchParams.startIndex + PAGINATION_STEP <= booksFound &&
                !isLoading && (
                    <LoadMoreButton
                        params={searchParams}
                        setParams={setSearchParams}
                    />
                )}
        </>
    );
}

export default SearchPage;
