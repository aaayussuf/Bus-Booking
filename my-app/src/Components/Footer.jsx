import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', py: 3, mt: 5 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Bus Booking System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
