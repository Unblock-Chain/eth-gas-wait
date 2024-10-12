import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'; 

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">About</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
