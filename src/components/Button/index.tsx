import "./style.css";

import React from "react";

import { Props } from "./types";

function Button({ children, onClick }: Props) {
    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
