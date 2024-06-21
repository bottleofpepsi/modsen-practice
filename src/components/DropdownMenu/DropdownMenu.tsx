import DropdownElement from './DropdownElement';
import './DropdownMenu.css'
import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

type Props = {
  items: string[];
}

function DropdownMenu({items} : Props) {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(items[0] );

    const chooseItem = (name: string) => {
      setValue(name);
      setVisible(false);
    }

    return (
      <aside className="dropdown-menu">
        <div className="dropdown-button" onClick={() => setVisible(!visible)}>
          <span className='dropdown-text'>{value}</span>
          {visible ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        <ul className={`dropdown-list ${visible ? "" : "hidden"}`}>
          {items.map(item => <DropdownElement name={item} callback={chooseItem}/>)}
        </ul>
      </aside>
    )
}

export default DropdownMenu;