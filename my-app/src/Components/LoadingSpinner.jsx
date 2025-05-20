import React from 'react';

const spinnerStyle = {
  width: '40px',
  height: '40px',
  border: '4px solid rgba(0, 0, 0, 0.1)',
  borderTop: '4px solid #3498db',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: 'auto',
  display: 'block',
};

const styleSheet = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

const LoadingSpinner = () => {
  return (
    <>
      <style>{styleSheet}</style>
      <div style={spinnerStyle} aria-label="Loading" role="status" />
    </>
  );
};

export default LoadingSpinner;
