import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const toastContainerStyle = {
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  minWidth: '250px',
  padding: '1rem',
  backgroundColor: '#333',
  color: 'white',
  borderRadius: '4px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const closeButtonStyle = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer',
  marginLeft: '1rem',
};

const NotificationToast = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div role="alert" aria-live="assertive" style={toastContainerStyle}>
      <span>{message}</span>
      <button
        type="button"
        aria-label="Close notification"
        onClick={() => {
          setVisible(false);
          if (onClose) onClose();
        }}
        style={closeButtonStyle}
      >
        &times;
      </button>
    </div>
  );
};

NotificationToast.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

NotificationToast.defaultProps = {
  duration: 3000,
  onClose: null,
};

export default NotificationToast;
