import React from 'react';

export default ({ text = '', width = '100%', height = '40vh' }) => (
  <div className="nnaHelperText" style={{ width, height }}>
    <h3>{text}</h3>
  </div>
);
