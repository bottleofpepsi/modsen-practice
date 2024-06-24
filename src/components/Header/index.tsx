import "./style.css";

import React from "react";
import { IoIosSearch } from "react-icons/io";

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
                <button className="search-button">
                    <IoIosSearch size={28} />
                </button>
            </section>
            <FilterPanel />
        </header>
    );
}

export default Header;
