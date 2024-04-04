// components/DateInput.js

import React from 'react';

const DateInput = ({ value, onChange }) => {
  return (
    <input 
      type="date" 
      value={value} 
      onChange={onChange} 
    />
  );
};

export default DateInput;
