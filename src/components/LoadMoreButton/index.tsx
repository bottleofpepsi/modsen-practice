import "./style.css";

import React from "react";

import { PAGINATION_STEP } from "@/constants";

import Button from "../Button";
import { Props } from "./types";

function LoadMoreButton({ params, setParams }: Props) {
    const paginate = () => {
        const newParams = { ...params };
        newParams.startIndex += PAGINATION_STEP;
        setParams(newParams);
    };

    return (
        <footer className="load-more">
            <Button onClick={paginate}>Load More</Button>
        </footer>
    );
}

export default LoadMoreButton;
