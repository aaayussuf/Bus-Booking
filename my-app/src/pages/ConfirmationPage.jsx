import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch the booking details from your backend or context
    const mockBooking = {
      route: {
        origin: 'Nairobi',
        destination: 'Moyale'
      },
      date: new Date(),
      seats: [5, 6],
      totalAmount: 2000,
      paymentMethod: 'M-Pesa',
      paymentStatus: 'completed',
      transactionId: 'MPESA-ABC123XYZ'
    };
    setBooking(mockBooking);
  }, []);

  if (!booking) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 3, maxWidth: 600, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Booking Confirmed!
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Booking Details
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Route" secondary={`${booking.route.origin} to ${booking.route.destination}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Travel Date" secondary={booking.date.toLocaleDateString()} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Seats" secondary={booking.seats.join(', ')} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Total Amount" secondary={`KES ${booking.totalAmount}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Payment Method" secondary={booking.paymentMethod} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Transaction ID" secondary={booking.transactionId} />
          </ListItem>
        </List>
      </Paper>
      <Typography variant="body1" paragraph>
        A confirmation has been sent to {user?.email}. Please arrive at least 30 minutes before departure.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default ConfirmationPage;