import './DropdownMenu.css'
import { ReactNode, useState } from 'react';


function DropdownMenu(children : React.ReactElement) {
    const [visible, setVisible] = useState(false);

    return (
      <div>
        {children}
      </div>
    )
}

export default DropdownMenu;