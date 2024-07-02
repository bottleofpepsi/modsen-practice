import "./style.css";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import useVisible from "../../hooks/useVisible";

type Props = {
    setParameter: (arg: string) => void;
    items: MenuItem[];
};

type MenuItem = {
    id: number;
    name: string;
    value: string;
};

function DropdownMenu({ setParameter, items }: Props) {
    const [ref, visible, setVisible] = useVisible<HTMLDivElement>(false);
    const [name, setName] = useState(items[0].name);

    const chooseItem = (itemName: string, itemValue: string) => {
        setName(itemName);
        setParameter(itemValue);
        setVisible(false);
    };

    return (
        <div ref={ref} className="dropdown-menu">
            <div
                className="dropdown-button"
                onClick={() => setVisible(!visible)}
            >
                <span className="dropdown-text">{name}</span>
                {visible ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <ul className={`dropdown-list ${visible ? "" : "hidden"}`}>
                {items.map((item) => (
                    <DropdownItem
                        key={item.id}
                        itemDetails={item}
                        onItemClicked={chooseItem}
                    />
                ))}
            </ul>
        </div>
    );
}

type ItemProps = {
    itemDetails: MenuItem;
    onItemClicked: (arg1: string, arg2: string) => void;
};

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

export default DropdownMenu;
