import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import backgroundImage from '../pictures/0d970404-091c-4295-8bda-c69bd86cc5d5.jpeg';

const HomePage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleBookNow = () => {
    navigate(isAuthenticated ? '/booking' : '/login');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'right',
        paddingTop: '64px', // push content below navbar
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          paddingRight: 3,
          paddingBottom: 2,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to <span style={{ color: '#FFD700' }}>Moyale Star</span>
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontWeight: 'light',
            lineHeight: 1.8,
            maxWidth: '600px',
            mb: 8,
          }}
        >
          Discover the joy of premium travel.  
          <br />
          <strong>Book Instantly.</strong> <span style={{ color: '#FFD700' }}>Travel Safely.</span> <strong>Arrive in Style.</strong>
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="success"
          sx={{
            mt: 3,
            px: 5,
            py: 1.5,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            borderRadius: '200px',
            textTransform: 'uppercase',
            marginRight: '150px',
            marginLeft: 'auto',
            marginBottom: '70px',
            marginTop: '-50px',
            paddingBottom: '10px',
            paddingTop: '10px',
          }}
          onClick={handleBookNow}
        >
          Book
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
