import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const MPesaForm = ({ onPaymentSubmit, bookingDetails }) => {
  const [phone, setPhone] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onPaymentSubmit({
        ...bookingDetails,
        paymentMethod: 'M-Pesa',
        paymentStatus: 'completed',
        transactionId: `MPESA-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
      });
    }, 2000);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        M-Pesa Payment
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="e.g. 254740471780"
        required
      />
      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Total Amount: KES {bookingDetails.totalAmount}
        </Typography>
      </Box>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        disabled={isProcessing}
      >
        {isProcessing ? 'Processing Payment...' : 'Pay with M-Pesa'}
      </Button>
    </Box>
  );
};

export default MPesaForm;