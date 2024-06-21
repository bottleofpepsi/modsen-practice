import { filterValues, sortingValues } from '../../utils';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './FilterPanel.css'

function FilterPanel() {
    return (
      <aside className='filter-panel'>
        <DropdownMenu items={filterValues}/>
        <DropdownMenu items={sortingValues}/>
      </aside>
    )
}

export default FilterPanel;