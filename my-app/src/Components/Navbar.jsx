import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import Logo from '../pictures/ChatGPT Image May 19, 2025, 09_05_22 PM.png';

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const StyledAppBar = styled(AppBar)({
    background: 'linear-gradient(90deg, #2e7d32, #66bb6a)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  });

  const NavLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'bold',
    marginRight: '20px',
    '&:hover': {
      color: '#FFD700',
    },
  });

  return (
    <StyledAppBar position="fixed">
      <Toolbar sx={{ minHeight: '64px', px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={Logo} alt="Bus Logo" style={{ height: '40px', marginRight: '12px' }} />
          <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none' }}>
            Moyale Star
          </Typography>
        </Box>
        <Box>
          <NavLink to="/about">About Us</NavLink>
          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={handleLogout} sx={{ fontWeight: 'bold' }}>
                Logout
              </Button>
              <Button
                variant="contained"
                color="warning"
                component={Link}
                to="/booking"
                sx={{ fontWeight: 'bold', ml: 2 }}
              >
                Book Now
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login" sx={{ fontWeight: 'bold' }}>
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register" sx={{ fontWeight: 'bold', ml: 1 }}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Navbar;
