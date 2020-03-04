import React from 'react';

interface Props {
  type?: string;
  placeholder?: string;
  value: any;
  name: string;
  onChange: any;
}

const Input: React.FC<Props> = ({
  type = "text",
  name,
  placeholder = name,
  value,
  onChange
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      style={{ width: "100%", display: "block", margin: "10px 0" }}
      onChange={onChange}
    />
  );
};

export default Input;
