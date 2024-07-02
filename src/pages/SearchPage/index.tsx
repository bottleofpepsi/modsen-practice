import React, { createContext, useEffect, useState } from "react";

import { fetchBooksByQuery } from "../../api";
import BookCard from "../../components/BookCard";
import Header from "../../components/Header";
import LoadingIndicator from "../../components/LoadingIndicator";
import LoadMoreButton from "../../components/LoadMoreButton";
import SearchResults from "../../components/SearchResults";
import { PAGINATION_STEP } from "../../constants";

type SearchParams = {
    query: string;
    category: string;
    sorting: string;
    startIndex: number;
};

type Book = {
    id: string;
    title: string;
    authors: string[] | undefined;
    category: string | undefined;
    thumbnailLink: string | undefined;
};

type Books = {
    total: number;
    books: Book[];
};

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

    const removeDuplicates = (books: Book[]): Book[] => {
        const uniqueIds: string[] = [];
        return books.filter((book) => {
            if (uniqueIds.includes(book.id)) {
                return false;
            }
            uniqueIds.push(book.id);
            return true;
        });
    };

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
                const books = removeDuplicates(data.books);
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
                        <BookCard
                            bookInfo={book}
                            key={book.id + book.title + book.authors}
                        />
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
