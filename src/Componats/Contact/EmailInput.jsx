import React from 'react';

const EmailInput = ({ inputType, onChange, value }) => {
  return (
    <div>
      <input
        type={inputType}
        placeholder="Add Your Email"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default EmailInput;
