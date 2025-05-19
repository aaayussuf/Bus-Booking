import React from 'react';
import { Box, Typography } from '@mui/material';

const legendItems = [
  { color: '#4caf50', label: 'Available Seat' },
  { color: '#f44336', label: 'Reserved Seat' },
  { color: '#2196f3', label: 'Selected Seat' },
];

const SeatLegend = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      {legendItems.map((item) => (
        <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', mx: 2 }}>
          <Box
            sx={{
              width: 20,
              height: 20,
              backgroundColor: item.color,
              borderRadius: 1,
              mr: 1,
              border: '1px solid #000',
            }}
          />
          <Typography variant="body2">{item.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SeatLegend;
