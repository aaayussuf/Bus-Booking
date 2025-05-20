import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Components/LoadingSpinner';
import ErrorMessage from '../Components/ErrorMessage';
import NotificationToast from '../Components/NotificationToast';

const mockBookings = [
  { id: 1, route: 'City A to City B', date: '2024-06-10', status: 'Confirmed' },
  { id: 2, route: 'City C to City D', date: '2024-06-15', status: 'Cancelled' },
  { id: 3, route: 'City E to City F', date: '2024-06-20', status: 'Confirmed' },
];

const BookingHistoryPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    // Simulate fetching bookings
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 800);
  }, []);

  const handleCancel = (id) => {
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    setActionLoading(true);
    setTimeout(() => {
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, status: 'Cancelled' } : b))
      );
      setToastMessage('Booking cancelled successfully.');
      setActionLoading(false);
    }, 1000);
  };

  const handleModify = (id) => {
    // For demo, just show alert
    alert('Modify booking feature coming soon!');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="booking-history-page" style={{ maxWidth: 700, margin: 'auto', padding: 20, paddingTop: 84 }}>
      <h2>Booking History</h2>
      {error && <ErrorMessage message={error} />}
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #ccc' }}>
              <th style={{ textAlign: 'left', padding: 8 }}>Route</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Date</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Status</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: 8 }}>{booking.route}</td>
                <td style={{ padding: 8 }}>{booking.date}</td>
                <td style={{ padding: 8, color: booking.status === 'Cancelled' ? 'red' : 'green' }}>
                  {booking.status}
                </td>
                <td style={{ padding: 8 }}>
                  <button
                    onClick={() => handleModify(booking.id)}
                    disabled={actionLoading || booking.status === 'Cancelled'}
                    style={{ marginRight: 8, padding: '6px 12px' }}
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => handleCancel(booking.id)}
                    disabled={actionLoading || booking.status === 'Cancelled'}
                    style={{ padding: '6px 12px' }}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {toastMessage && (
        <NotificationToast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
};

export default BookingHistoryPage;
