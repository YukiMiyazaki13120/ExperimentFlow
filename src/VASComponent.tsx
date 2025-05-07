// VASComponent.tsx
import React, { useState } from 'react';

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
    <div style={{ margin: '1rem 0' }}>
      <label>{label}</label>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleInput}
        style={{ width: '100%' }}
      />
      <div>{value}</div>
    </div>
  );
};

export default VASComponent;
