import React from "react";
import { Route, Routes } from "react-router-dom";

import BookDetailsPage from "./pages/BookDetailsPage";
import SearchPage from "./pages/SearchPage";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/:id" element={<BookDetailsPage />} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
