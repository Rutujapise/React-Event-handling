import React from 'react';

const SubjectInput = ({ inputType, onChange, value }) => {
  return (
    <div>
      <input
        type={inputType}
        placeholder="Add Your Subject"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default SubjectInput;
