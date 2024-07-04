import "./style.css";

import React, { useContext } from "react";

import { BookCountContext } from "@/pages/SearchPage";

function ResultCount() {
    const count = useContext(BookCountContext);

    return (
        <section className="result-count">
            <span className="result-count-text">Found {count} books</span>
        </section>
    );
}

export default ResultCount;
