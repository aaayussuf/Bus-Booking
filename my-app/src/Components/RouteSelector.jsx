import styles from './RouteSelector.module.css';
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Grid } from '@mui/material';

const RouteSelector = ({ onRouteChange }) => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState({
    From: '',
    To: '',
  });

  useEffect(() => {
    // Simulate API call to fetch routes
    const fetchRoutes = async () => {
      // In a real app, this would be an API call
      const mockRoutes = [
        { id: 1, From: 'Nairobi', To: 'Isiolo' },
        { id: 2, From: 'Nairobi', To: 'Marsabit' },
        { id: 3, From: 'Nairobi', To: 'Sololo' },
        { id: 3, From: 'Nairobi', To: 'Moyale' },
        { id: 4, From: 'Moyale', To: 'Nairobi' },
        { id: 4, From: 'Moyale', To: 'Sololo' },
        { id: 4, From: 'Moyale', To: 'Marsabit' },
        { id: 4, From: 'Moyale', To: 'Isiolo' },
        { id: 4, From: 'Sololo', To: 'Nairobi' },
        { id: 4, From: 'Sololo', To: 'Marsabit' },
        { id: 4, From: 'Sololo', To: 'Isiolo' },
        { id: 4, From: 'Marsabit', To: 'Nairobi' },
        { id: 4, From: 'Marsabit', To: 'Sololo' },
        { id: 4, From: 'Marsabit', To: 'Isiolo' },
        { id: 4, From: 'Marsabit', To: 'Moyale' },
        { id: 4, From: 'Isiolo', To: 'Nairobi' },
        { id: 4, From: 'Isiolo', To: 'Sololo' },
        { id: 4, From: 'Isiolo', To: 'Marsabit' },
        { id: 4, From: 'Isiolo', To: 'Moyale' },
      ];
      setRoutes(mockRoutes);
    };

    fetchRoutes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedRoute(prev => {
      const newRoute = { ...prev, [name]: value };
      if (name === 'From') {
        newRoute.To = '';
      }
      return newRoute;
    });
  };

  useEffect(() => {
    if (selectedRoute.From && selectedRoute.To) {
      onRouteChange(selectedRoute);
    }
  }, [selectedRoute, onRouteChange]);

  const getDestinations = () => {
    if (!selectedRoute.From) return [];
    return routes
      .filter(route => route.From === selectedRoute.From)
      .map(route => route.To);
  };

  const getOrigins = () => {
    const uniqueOrigins = [...new Set(routes.map(route => route.From))];
    return uniqueOrigins;
  };

  return (
    <div className={styles.routeSelectorContainer}>
      <Grid container spacing={2} columns={12}>
        <Grid columnSpan={6} className={styles.routeSelectorField}>
          <label className={styles.routeSelectorLabelOrigin} htmlFor="From">Origin</label>
          <TextField
            select
            fullWidth
            id="From"
            name="From"
            value={selectedRoute.From}
            onChange={handleChange}
            required
            className={styles.routeSelectorFieldOrigin}
          >
            {getOrigins().map((origin) => (
              <MenuItem key={origin} value={origin}>
                {origin}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid columnSpan={6} className={styles.routeSelectorField}>
          <label className={styles.routeSelectorLabelDestination} htmlFor="To">Destination</label>
          <TextField
            select
            fullWidth
            id="To"
            name="To"
            value={selectedRoute.To}
            onChange={handleChange}
            disabled={!selectedRoute.From}
            required
            className={styles.routeSelectorFieldDestination}
          >
            {getDestinations().map((destination) => (
              <MenuItem key={destination} value={destination}>
                {destination}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
};

export default RouteSelector;
