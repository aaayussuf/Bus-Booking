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
        height: '100vh', // Ensures the Box occupies the full viewport height
        width: '100vw',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end', // Align content to the right
        justifyContent: 'flex-end', // Align content to the bottom
        color: 'white',
        textAlign: 'right', // Align text to the right
        margin: 0, // Remove any default margin
        padding: 0, // Remove unnecessary padding
        overflow: 'hidden', // Prevent overflow that might cause a white screen
        paddingTop: '64px', // Adjust this value to match your navbar height
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 5 }}>
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
          mt: 4,
          px: 5,
          py: 1.5,
          fontSize: '1.5rem', // Slightly larger font size for emphasis
          fontWeight: 'bold',
          borderRadius: '15px', // Rounded button for a modern look
          position: 'relative',
          bottom: '50px', // Position the button slightly above the bottom
          right: '150px', // Position the button slightly to the left
          textTransform: 'uppercase', // Make the text uppercase for impact
        }}
        onClick={handleBookNow}
      >
        Book
      </Button>
    </Box>
  );
};

export default HomePage;