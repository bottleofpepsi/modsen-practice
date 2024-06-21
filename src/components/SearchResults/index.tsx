import "./SearchResults.css";

import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function SearchResults({ children }: Props) {
    return <main className="results">{children}</main>;
}

export default SearchResults;
