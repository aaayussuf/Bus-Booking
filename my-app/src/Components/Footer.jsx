import React from 'react';
import { Box, Typography, Container, Link, Stack, IconButton, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#004d40',
        color: 'white',
        py: 6,
        mt: 'auto',
        position: 'relative',
        bottom: 0,
        width: '100%',
        boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >
          <Box sx={{ maxWidth: 300 }}>
            <Typography variant="h6" gutterBottom>
              Bus Booking System
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Your trusted partner for seamless bus ticket booking. Experience convenience and comfort with us.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="/" color="inherit" underline="hover" sx={{ fontWeight: 'medium' }}>
                Home
              </Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ fontWeight: 'medium' }}>
                About
              </Link>
              <Link href="/contact" color="inherit" underline="hover" sx={{ fontWeight: 'medium' }}>
                Contact
              </Link>
              <Link href="/booking" color="inherit" underline="hover" sx={{ fontWeight: 'medium' }}>
                Book a Ticket
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              Stay Connected
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                sx={{ color: 'white' }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                sx={{ color: 'white' }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                sx={{ color: 'white' }}
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" gutterBottom>
              Subscribe to our newsletter
            </Typography>
            <Stack direction="row" spacing={1}>
              <TextField
                variant="filled"
                size="small"
                placeholder="Your email"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 1,
                  input: { color: '#0d47a1' },
                  width: 180,
                }}
              />
              <Button variant="contained" color="secondary" sx={{ bgcolor: '#ff6f00' }}>
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Stack>

        <Typography
          variant="caption"
          display="block"
          textAlign="center"
          mt={6}
          sx={{ opacity: 0.7 }}
        >
          &copy; {new Date().getFullYear()} Bus Booking System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
