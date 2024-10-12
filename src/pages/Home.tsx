import React from 'react';

import "../styles/Home.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <h1>Welcome to the Home Page</h1>
            <p>This is the Home component.</p>
            <Footer />
        </div>
    );
};

export default Home;
