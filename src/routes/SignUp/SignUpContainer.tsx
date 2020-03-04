import React, { useState } from 'react';
import SignUpPresenter from './SignUpPresenter';

interface Props {}

const SignUpContainer: React.FC<Props> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: undefined
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value }
    } = event;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`${formData.name}님 안녕하세요. email : ${formData.email}`);
  };

  return (
    <SignUpPresenter
      handleChange={handleChange}
      formData={formData}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
