import "./style.css";

import React from "react";

import { ItemProps } from "../types";

function DropdownItem({ itemDetails, onItemClicked }: ItemProps) {
    return (
        <li
            className="dropdown-item"
            onClick={() => onItemClicked(itemDetails.name, itemDetails.value)}
        >
            <span>{itemDetails.name}</span>
        </li>
    );
}

export default DropdownItem;
