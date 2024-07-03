import "./style.css";

import React from "react";

import ResultCount from "./ResultCount";
import { Props } from "./types";

function SearchResults({ children }: Props) {
    return (
        <>
            <ResultCount />
            <main className="results">{children}</main>
        </>
    );
}

export default SearchResults;
