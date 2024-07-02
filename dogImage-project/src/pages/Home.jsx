// import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Home = () => {
    const navigate = useNavigate();

    const navigateToDash = () => {
        navigate('/dash');
    };

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            height="100vh"
        >
            <h1>Welcome to Dog World</h1>
            <Button onClick={navigateToDash} variant="contained">
                Click Me!!
            </Button>
        </Box>
    );
};

export default Home;
