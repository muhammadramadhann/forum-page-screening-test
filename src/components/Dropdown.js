import React from 'react';
import { Link } from 'react-router-dom';

function Dropdown({ categories }) {
    return (
        <ul className="dropdown-menu">
            {
                categories.map((category) => (
                    <li key={category.id}>
                        <Link to={category.path} className={category.class}>{category.name}</Link>
                    </li>
                ))
            }
        </ul>
    );
}

export default Dropdown;