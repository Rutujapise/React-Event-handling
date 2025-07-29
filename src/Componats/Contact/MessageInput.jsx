import React from 'react';

const MessageInput = ({ onChange, value }) => {
  return (
    <div>
      <textarea
        placeholder="Add your message here"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default MessageInput;
