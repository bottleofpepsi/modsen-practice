import "./style.css";

import React from "react";

import { filterValues, sortingValues } from "../../utils";
import DropdownMenu from "../DropdownMenu";

function FilterPanel() {
    return (
        <aside className="filter-panel">
            <DropdownMenu items={filterValues} />
            <DropdownMenu items={sortingValues} />
        </aside>
    );
}

export default FilterPanel;
