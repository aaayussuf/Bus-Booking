import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8, p: 4, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2e7d32', fontWeight: 'bold', mb: 3 }}>
          Welcome Back! Please Login
        </Typography>
        {error && (
          <Typography color="error" gutterBottom>
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            type="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: '#2e7d32', '&:hover': { backgroundColor: '#1b4d24' } }}
          >
            Login
          </Button>
        </form>
        <Typography sx={{ mt: 2 }}>
          Don't have an account?{' '}
          <Button
            onClick={() => navigate('/register')}
            sx={{ color: '#2e7d32', fontWeight: 'bold', textTransform: 'none' }}
          >
            Register here
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginPage;