import React from 'react';
import { Link } from 'react-router-dom';

function Aside({ discussions }) {
    return (
        <aside>
            <h3>Diskusi 5 Teratas</h3>
            <ul className="top-discuss">
                {
                    discussions.map((discussion) => (
                        <li key={discussion.id}>
                            <span className="discuss-number">{discussion.id}</span>
                            <Link to={discussion.path} className={discussion.class}>{discussion.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
}

export default Aside;