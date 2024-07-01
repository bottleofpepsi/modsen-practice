import React from "react";

import SearchPage from "./pages/SearchPage";
import ErrorBoundary from "./utils/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <SearchPage />
        </ErrorBoundary>
    );
}

export default App;
