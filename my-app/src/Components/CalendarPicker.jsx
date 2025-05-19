import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField } from '@mui/material';

const CalendarPicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
  };

  return (
    <div style={{ margin: '20px 0' }}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        customInput={
          <TextField
            fullWidth
            label="Select Travel Date"
            variant="outlined"
            InputProps={{
              readOnly: true,
            }}
          />
        }
      />
    </div>
  );
};

export default CalendarPicker;