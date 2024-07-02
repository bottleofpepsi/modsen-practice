import "./style.css";

import React, { KeyboardEvent } from "react";
import { IoIosSearch } from "react-icons/io";

import { filterValues, sortingValues } from "../../constants";
import DropdownMenu from "../DropdownMenu";
import { Props } from "./types";

function Header({ params, setParams }: Props) {
    const newParams = { ...params };

    const sendSearchParams = () => {
        newParams.startIndex = 0;
        setParams(newParams);
    };
    const enterPressed = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            sendSearchParams();
        }
    };

    return (
        <header>
            <h1>Book Finder</h1>
            <section className="search-bar">
                <input
                    className="search-field"
                    type="search"
                    placeholder="Search for books, authors, etc."
                    onChange={(event) => (newParams.query = event.target.value)}
                    onKeyDown={enterPressed}
                />
                <button onClick={sendSearchParams} className="search-button">
                    <IoIosSearch size={28} />
                </button>
            </section>
            <aside className="filter-panel">
                <DropdownMenu
                    setParameter={(value: string) =>
                        (newParams.sorting = value)
                    }
                    items={sortingValues}
                />
                <DropdownMenu
                    setParameter={(value: string) =>
                        (newParams.category = value)
                    }
                    items={filterValues}
                />
            </aside>
        </header>
    );
}

export default Header;
