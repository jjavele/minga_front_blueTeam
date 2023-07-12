import React, { useState } from 'react';

const Switch = () => {
    const [isChecked, setIsChecked] = useState(false);
  
    const handleToggle = () => {
      setIsChecked(!isChecked);
    };
  
    return (
      <label className="toggle-switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle}/><span className="slider" />
      </label>
    );
  };

export default Switch;