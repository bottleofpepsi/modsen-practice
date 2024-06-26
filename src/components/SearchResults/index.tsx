import "./style.css";

import React, { ReactNode, useState } from "react";

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
    const [count] = useState(0);

    return (
        <section className="result-count">
            <span className="result-count-text">Found {count} books</span>
        </section>
    );
}

export default SearchResults;
