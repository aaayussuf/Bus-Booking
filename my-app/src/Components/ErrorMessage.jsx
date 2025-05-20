import React from 'react';
import PropTypes from 'prop-types';

const errorContainerStyle = {
  padding: '1rem',
  backgroundColor: '#f8d7da',
  color: '#721c24',
  borderRadius: '4px',
  border: '1px solid #f5c6cb',
  margin: '1rem 0',
  textAlign: 'center',
};

const buttonStyle = {
  marginTop: '0.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#721c24',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div role="alert" style={errorContainerStyle}>
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} style={buttonStyle}>
          Retry
        </button>
      )}
    </div>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func,
};

ErrorMessage.defaultProps = {
  onRetry: null,
};

export default ErrorMessage;
