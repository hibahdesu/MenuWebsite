import './FilterButton.css';
import { useState } from 'react';


export default function FilterButton({ filter, setFilter }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setFilter(filter);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`filter-button ${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            {filter}
        </button>
    );
}