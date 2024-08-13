import React from 'react';

const ToggleButton = ({ isActive, onToggle, children }) => {
  return (
    <button> { children } </button>
  );
};

export default ToggleButton;
