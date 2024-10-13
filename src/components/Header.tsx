import React from 'react';
import Link from 'next/link';

import Wallet from './Wallet';
import "../styles/header.css";

const Header = () => {
    return (
        <div className="header-container">
            <div className="links-container">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/transaction">Transaction</Link>
            </div>
            <div className="wallet-container">
                <Wallet />
            </div>
        </div>
    );
};

export default Header;
