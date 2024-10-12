import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css'; 
import Wallet from './Wallet';

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <Link to="/dashboard">Dashboard</Link>
          <div className="wallet-container">
                <Wallet />
            </div>
        </div>
    );
};

export default Header;
