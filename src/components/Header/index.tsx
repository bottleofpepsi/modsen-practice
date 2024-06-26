import "./style.css";

import React from "react";
import { IoIosSearch } from "react-icons/io";

import { searchBooks } from "../../api";
import FilterPanel from "../FilterPanel";

function Header() {
    return (
        <header>
            <h1>Book Finder</h1>
            <section className="search-bar">
                <input
                    className="search-field"
                    type="search"
                    placeholder="Search for books, authors, etc."
                />
                <button
                    onClick={() => searchBooks("js", "computers", "relevance")}
                    className="search-button"
                >
                    <IoIosSearch size={28} />
                </button>
            </section>
            <FilterPanel />
        </header>
    );
}

export default Header;
