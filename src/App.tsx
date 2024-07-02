import React from "react";
import { Route, Routes } from "react-router-dom";

import SearchPage from "./pages/SearchPage";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/:id" element={<h1>Placeholder</h1>} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
