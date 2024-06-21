import { ReactElement } from 'react';
import './DropdownElement.css';

type Props = {
  name: string;
  callback: Function;
}

function DropdownElement({name, callback}: Props) {
    return (
      <li className='dropdown-item' onClick={() => callback(name)}>
        <span>{name}</span>
      </li>
    )
}

export default DropdownElement;