import React from "react";

import BookCard from "./components/BookCard";
import Header from "./components/Header";
import SearchResults from "./components/SearchResults";

function App() {
    return (
        <>
            <Header />
            <SearchResults>
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </SearchResults>
        </>
    );
}

export default App;
