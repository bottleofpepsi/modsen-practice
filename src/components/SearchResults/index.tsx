import "./style.css";

import React, { ReactNode, useContext } from "react";

import { BookCountContext } from "../../pages/SearchPage";

type Props = {
    children: ReactNode;
};

function SearchResults({ children }: Props) {
    return (
        <>
            <ResultCount />
            <main className="results">{children}</main>
        </>
    );
}

function ResultCount() {
    const count = useContext(BookCountContext);

    return (
        <section className="result-count">
            <span className="result-count-text">Found {count} books</span>
        </section>
    );
}

export default SearchResults;
