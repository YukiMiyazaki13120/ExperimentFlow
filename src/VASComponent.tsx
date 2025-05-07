// VASComponent.tsx
import React, { useState } from 'react';
import './VASComponent.css';

interface VASProps {
  label: string;
  onChange: (value: number) => void;
}

const VASComponent: React.FC<VASProps> = ({ label, onChange }) => {
  const [value, setValue] = useState(50);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
    onChange(val);
  };

  return (
    <div className="vas-container">
      <label className="vas-label">{label}</label>
      <input
        className="vas-slider"
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleInput}
      />
      <div>{value}</div>
    </div>
  );
};

export default VASComponent;
