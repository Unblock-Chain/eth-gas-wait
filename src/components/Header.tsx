import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <Link to="/dashboard">Dashboard</Link>
        </div>
    );
};

export default Header;
