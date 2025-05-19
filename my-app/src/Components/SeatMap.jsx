import React, { useState } from 'react';
import styles from './SeatMap.module.css';

const SeatMap = ({ onSeatSelect }) => {
  const seatLayout = [
    { left: ['1A', '1B'], right: ['DRIVER'], isLabel: true },
    { left: ['2A', '2B'], right: ['2C', '2D'] },
    { left: ['3A', '3B'], right: ['3C', '3D'] },
    { left: ['DOOR'], right: ['4C', '4D'], isLabel: true },
    { left: ['5A', '5B'], right: ['5C', '5D'] },
    { left: ['6A', '6B'], right: ['6C', '6D'] },
    { left: ['7A', '7B'], right: ['7C', '7D'] },
    { left: ['8A', '8B'], right: ['8C', '8D'] },
    { left: ['9A', '9B'], right: ['9C', '9D'] },
    { left: ['10A', '10B'], right: ['10C', '10D'] },
    { left: ['11A', '11B'], right: ['11C', '11D'] },
    { left: ['12A', '12B'], right: ['12C', '12D'] },
    { left: ['13A', '13B'], right: ['13C', '13D', '13E'] }
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatId) => {
    if (seatId === 'DOOR' || seatId === 'DRIVER') return; // Skip labels
    const updatedSeats = selectedSeats.includes(seatId)
      ? selectedSeats.filter(id => id !== seatId)
      : [...selectedSeats, seatId];
    setSelectedSeats(updatedSeats);
    onSeatSelect(updatedSeats);
  };

  const isSelected = (seatId) => selectedSeats.includes(seatId);

  return (
    <div className={styles.seatMapWrapper}>
      <div className={styles.seatMapTable}>
        {seatLayout.map((row, idx) => (
          <div key={idx} className={styles.row}>
            <div className={styles.leftSide}>
              {row.left.map(seat =>
                row.isLabel ? (
                  <div key={seat} className={styles.labelCell}>{seat}</div>
                ) : (
                  <button
                    key={seat}
                    className={`${styles.seatButton} ${isSelected(seat) ? styles.selected : ''}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </button>
                )
              )}
            </div>

            <div className={styles.aisle}>
              {idx === 3 ? <span className={styles.doorway}>CARRIAGE WAY</span> : null}
            </div>

            <div className={styles.rightSide}>
              {row.right.map(seat =>
                row.isLabel ? (
                  <div key={seat} className={styles.labelCell}>{seat}</div>
                ) : (
                  <button
                    key={seat}
                    className={`${styles.seatButton} ${isSelected(seat) ? styles.selected : ''}`}
                    onClick={() => handleSeatClick(seat)}
                  >
                    {seat}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatMap;
