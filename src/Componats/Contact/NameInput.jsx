import React from 'react';

const NameInput = ({ inputType, onChange, value }) => {
  return (
    <div>
      <input
        type={inputType}
        placeholder="Add Your Name here"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default NameInput;
