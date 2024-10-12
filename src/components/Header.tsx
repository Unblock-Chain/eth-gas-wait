import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'; 
import Wallet from './Wallet';

const Header: React.FC = () => {
    return (
        <header className="header-container">
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    {/* <li>
                        <Link to="/about">About</Link>
                    </li> */}
                </ul>
            </nav>
            <div className="wallet-container">
                <Wallet />
            </div>
        </header>
    );
};

export default Header;
