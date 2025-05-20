import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from '../pictures/ChatGPT Image May 19, 2025, 09_05_22 PM.png';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #004d00, #003300)', // dark green gradient
  boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
  transition: 'background-color 0.5s ease',
}));

const NavLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#fff',
  fontWeight: '600',
  marginRight: '20px',
  padding: '8px 14px',
  borderRadius: '6px',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#ff6a00',
    backgroundColor: '#fff',
    textDecoration: 'none',
    transform: 'scale(1.1)',
    boxShadow: '0 0 8px #ff6a00',
  },
}));

const BookNowButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: '#fff',
  color: '#ee0979',
  borderRadius: '30px',
  padding: '8px 20px',
  textTransform: 'none',
  boxShadow: '0 4px 15px rgba(238, 9, 121, 0.6)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#ee0979',
    color: '#fff',
    boxShadow: '0 6px 20px rgba(238, 9, 121, 0.9)',
    transform: 'scale(1.05)',
  },
}));

const LogoImage = styled('img')({
  height: '42px',
  marginRight: '14px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(10deg) scale(1.1)',
  },
});

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    handleMenuClose();
    logout();
    navigate('/');
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const userMenuId = 'primary-account-menu';

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        {isAuthenticated ? (
          <>
            <ListItem button component={Link} to="/profile">
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button component={Link} to="/booking-history">
              <ListItemText primary="Booking History" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
            <ListItem button component={Link} to="/booking">
              <ListItemText primary="Book Now" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ minHeight: '64px', px: 2, display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LogoImage src={Logo} alt="Bus Logo" />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: '#fff',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginRight: 3,
                userSelect: 'none',
              }}
            >
              Moyale Star
            </Typography>
            {!isMobile && (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
              </>
            )}
          </Box>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {isAuthenticated ? (
                <>
                  <Button
                    aria-controls={userMenuId}
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                    startIcon={<AccountCircle />}
                    sx={{ fontWeight: 'bold', textTransform: 'none', mr: 2 }}
                  >
                    Account
                  </Button>
                  <Menu
                    id={userMenuId}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                  >
                    <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                      Profile
                    </MenuItem>
                    <MenuItem component={Link} to="/booking-history" onClick={handleMenuClose}>
                      Booking History
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                  <BookNowButton component={Link} to="/booking" variant="contained">
                    Book Now
                  </BookNowButton>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
                </>
              )}
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
}

export default Navbar;
