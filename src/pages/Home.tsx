import React from 'react';

import Header from '../components/Header';

const Home: React.FC = () => {
    return (
        <div>
             <Header />
            <h1>Welcome to the Home Page</h1>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;
