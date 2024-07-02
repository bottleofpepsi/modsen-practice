import "./style.css";

import React from "react";

import { PAGINATION_STEP } from "../../constants";

type SearchParams = {
    query: string;
    category: string;
    sorting: string;
    startIndex: number;
};

type Props = {
    params: SearchParams;
    setParams: (arg: SearchParams) => void;
};

function LoadMoreButton({ params, setParams }: Props) {
    const paginate = () => {
        const newParams = { ...params };
        newParams.startIndex += PAGINATION_STEP;
        setParams(newParams);
    };

    return (
        <div className="load-more">
            <button className="load-more-button" onClick={paginate}>
                Load More
            </button>
        </div>
    );
}

export default LoadMoreButton;
