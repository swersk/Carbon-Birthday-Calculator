import React from 'react';

const Storm = ({ showStorm }) => {
  if (!showStorm) return null;

  return (
    <div className="storm-container">
      {/* Render multiple fireballs */}
      <div className="storm-element storm-element1"></div>
      <div className="storm-element storm-element2"></div>
      <div className="storm-element storm-element3"></div>
      {/* Add more fireballs as needed */}
    </div>
  );
};

export default Storm;