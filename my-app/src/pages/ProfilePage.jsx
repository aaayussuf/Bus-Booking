import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Components/LoadingSpinner';
import ErrorMessage from '../Components/ErrorMessage';
import NotificationToast from '../Components/NotificationToast';

const mockUserProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1234567890',
};

const mockRecentBookings = [
  { id: 1, route: 'City A to City B', date: '2024-06-10', status: 'Confirmed' },
  { id: 2, route: 'City C to City D', date: '2024-06-15', status: 'Cancelled' },
];

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching user profile data
    setTimeout(() => {
      setProfile(mockUserProfile);
      setFormData(mockUserProfile);
      setLoading(false);
    }, 800);
  }, []);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleEditToggle = () => {
    setEditMode(!editMode);
    setFormData(profile);
    setError('');
  };

  const handleSave = () => {
    // Simulate save with validation
    if (!formData.name || !formData.email) {
      setError('Name and Email are required.');
      return;
    }
    setProfile(formData);
    setEditMode(false);
    setToastMessage('Profile updated successfully!');
  };

  const handleViewAllBookings = () => {
    navigate('/booking-history');
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="profile-page" style={{ maxWidth: 600, margin: 'auto', padding: 20, paddingTop: 84 }}>
      <h2>User Profile</h2>
      {error && <ErrorMessage message={error} />}
      <div style={{ marginBottom: 20 }}>
        <label>
          Name:<br />
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
            disabled={!editMode}
            style={{ width: '100%', padding: 8, fontSize: 16 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>
          Email:<br />
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            disabled={!editMode}
            style={{ width: '100%', padding: 8, fontSize: 16 }}
          />
        </label>
      </div>
      <div style={{ marginBottom: 20 }}>
        <label>
          Phone:<br />
          <input
            type="tel"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
            disabled={!editMode}
            style={{ width: '100%', padding: 8, fontSize: 16 }}
          />
        </label>
      </div>
      <div>
        {editMode ? (
          <>
            <button onClick={handleSave} style={{ marginRight: 10, padding: '8px 16px' }}>Save</button>
            <button onClick={handleEditToggle} style={{ padding: '8px 16px' }}>Cancel</button>
          </>
        ) : (
          <button onClick={handleEditToggle} style={{ padding: '8px 16px' }}>Edit Profile</button>
        )}
      </div>

      <hr style={{ margin: '30px 0' }} />

      <h3>Recent Bookings</h3>
      {mockRecentBookings.length === 0 ? (
        <p>No recent bookings found.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {mockRecentBookings.map((booking) => (
            <li key={booking.id} style={{ marginBottom: 10, padding: 10, border: '1px solid #ccc', borderRadius: 4 }}>
              <strong>{booking.route}</strong><br />
              Date: {booking.date}<br />
              Status: <span style={{ color: booking.status === 'Cancelled' ? 'red' : 'green' }}>{booking.status}</span>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleViewAllBookings} style={{ marginTop: 10, padding: '8px 16px' }}>
        View All Bookings
      </button>

      {toastMessage && (
        <NotificationToast message={toastMessage} onClose={() => setToastMessage('')} />
      )}
    </div>
  );
};

export default ProfilePage;
