import React, { useState } from 'react';

const ToggleSwitch = ({onClick}) => {
  
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onClick()
  };

  return (
    <div
      className={`w-12 h-6 bg-gray-300 rounded-full flex items-center cursor-pointer transition-colors ${
        isOn ? 'bg-green-500' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform ${
          isOn ? 'translate-x-6' : 'translate-x-1'
        }`}
      ></div>
    </div>
  );
};

export default ToggleSwitch;