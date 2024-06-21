import "./DropdownMenu.css";

import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
    items: ListItem[];
};

type ListItem = {
    id: number;
    value: string;
};

function DropdownMenu({ items }: Props) {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(items[0].value);

    const chooseItem = (name: string) => {
        setValue(name);
        setVisible(false);
    };

    return (
        <div className="dropdown-menu">
            <div
                className="dropdown-button"
                onClick={() => setVisible(!visible)}
            >
                <span className="dropdown-text">{value}</span>
                {visible ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <ul className={`dropdown-list ${visible ? "" : "hidden"}`}>
                {items.map((item) => (
                    <DropdownItem
                        key={item.id}
                        name={item.value}
                        callback={chooseItem}
                    />
                ))}
            </ul>
        </div>
    );
}

type ItemProps = {
    name: string;
    callback: (x: string) => void;
};

function DropdownItem({ name, callback }: ItemProps) {
    return (
        <li className="dropdown-item" onClick={() => callback(name)}>
            <span>{name}</span>
        </li>
    );
}

export default DropdownMenu;
