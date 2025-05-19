import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Alert,
  Fade,
  Divider,
} from '@mui/material';
import Navbar from '../Components/Navbar'; // Import Navbar
import RouteSelector from '../Components/RouteSelector';
import CalendarPicker from '../Components/CalendarPicker';
import SeatMap from '../Components/SeatMap';
import SeatLegend from '../Components/SeatLegend';
import MPesaForm from '../Components/MPesaForm';

const steps = ['Select Route', 'Select Date', 'Choose Seats', 'Make Payment'];

const BookingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [route, setRoute] = useState(null);
  const [date, setDate] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRouteChange = (selectedRoute) => {
    setRoute(selectedRoute);
    setActiveStep(1);
  };

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    setActiveStep(2);
  };

  const handleSeatSelect = (seats) => {
    setSelectedSeats(seats);
    if (seats.length > 0) {
      setActiveStep(3);
    }
  };

  const handlePaymentSubmit = (paymentDetails) => {
    const totalAmount = selectedSeats.length * (selectedSeats[0] > 20 ? 1500 : 1000);
    const details = {
      route,
      date,
      seats: selectedSeats,
      totalAmount,
      ...paymentDetails,
    };
    setBookingDetails(details);
    setSuccessMessage('🎉 Booking confirmed successfully!');

    // Send a success message to the client
    window.alert('Your payment was successful! Booking confirmed. Thank you for choosing our service.');

    console.log('Booking confirmed:', details);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <RouteSelector onRouteChange={handleRouteChange} />;
      case 1:
        return <CalendarPicker onDateChange={handleDateChange} />;
      case 2:
        return (
          <Box>
            <SeatMap onSeatSelect={handleSeatSelect} />
            <Box mt={3}>
              <SeatLegend />
            </Box>
          </Box>
        );
      case 3:
        return (
          <MPesaForm
            onPaymentSubmit={handlePaymentSubmit}
            bookingDetails={{
              route,
              date,
              seats: selectedSeats,
              totalAmount: selectedSeats.length * (selectedSeats[0] > 20 ? 1500 : 1000),
            }}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <Navbar /> {/* Navbar is included here */}
      <Box
        sx={{
          maxWidth: 1000,
          mx: 'auto',
          p: { xs: 2, sm: 4 },
          backgroundColor: '#f0f4f8',
          minHeight: '100vh',
          marginTop: '64px', // Ensure content is pushed below the Navbar
        }}
      >
        <Fade in>
          <Box>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight="bold"
              color="primary"
              gutterBottom
            >
              🚌 Book Your Bus Ticket
            </Typography>
            <Typography textAlign="center" color="text.secondary" mb={3}>
              Choose your route, date, seat, and pay securely.
            </Typography>

            {successMessage && (
              <Alert severity="success" sx={{ mb: 3, fontSize: '1rem' }}>
                {successMessage}
              </Alert>
            )}

            <Stepper
              activeStep={activeStep}
              alternativeLabel
              sx={{
                mb: 4,
                '.MuiStepLabel-label': { fontWeight: 600 },
              }}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: '#fff',
                boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              {getStepContent(activeStep)}
            </Paper>

            {bookingDetails && (
              <Box mt={4}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  Booking Summary
                </Typography>
                <Box
                  sx={{
                    backgroundColor: '#f9f9f9',
                    p: 2,
                    borderRadius: 2,
                    fontSize: '0.95rem',
                  }}
                >
                  <p>
                    <strong>Route:</strong> {bookingDetails.route.From} →{' '}
                    {bookingDetails.route.To}
                  </p>
                  <p>
                    <strong>Date:</strong>{' '}
                    {new Date(bookingDetails.date).toDateString()}
                  </p>
                  <p>
                    <strong>Seats:</strong> {bookingDetails.seats.join(', ')}
                  </p>
                  <p>
                    <strong>Total Amount:</strong> KES {bookingDetails.totalAmount}
                  </p>
                </Box>
              </Box>
            )}
          </Box>
        </Fade>
      </Box>
    </>
  );
};

export default BookingPage;