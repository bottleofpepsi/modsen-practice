import "./style.css";

import React from "react";

import { filterValues, sortingValues } from "../../constants";
import DropdownMenu from "../DropdownMenu";

function FilterPanel() {
    return (
        <aside className="filter-panel">
            <DropdownMenu items={sortingValues} />
            <DropdownMenu items={filterValues} />
        </aside>
    );
}

export default FilterPanel;
