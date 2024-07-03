import "./style.css";

import React from "react";

import { PAGINATION_STEP } from "../../constants";
import Button from "../Button";
import { Props } from "./types";

function LoadMoreButton({ params, setParams }: Props) {
    const paginate = () => {
        const newParams = { ...params };
        newParams.startIndex += PAGINATION_STEP;
        setParams(newParams);
    };

    return (
        <div className="load-more">
            <Button onClick={paginate}>Load More</Button>
        </div>
    );
}

export default LoadMoreButton;
