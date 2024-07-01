// import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const navigateToDash = () => {
        navigate('/dash');
    };

    return (
        <div>
            <h1>Welcome to Dog World</h1>
            <button onClick={navigateToDash}>Click Me!</button>
        </div>
    );
};

export default Home;
