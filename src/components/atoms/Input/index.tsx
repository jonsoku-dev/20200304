import React from 'react';

interface Props {
  type: string;
  placeholder: string;
  value: any;
  name: string;
}

const Input: React.FC<Props> = ({ type, placeholder, value, name }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} name={name} />
  );
};

export default Input;
