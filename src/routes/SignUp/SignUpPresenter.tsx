import React from 'react';
import Button from 'src/components/atoms/Button';
import Form from 'src/components/atoms/Form';
import Input from 'src/components/atoms/Input';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    name: string;
    email: string;
    password: string;
    age?: number;
  };
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpPresenter: React.FC<Props> = ({
  handleChange,
  formData,
  handleSubmit
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input onChange={handleChange} value={formData.name} name={"name"} />
      <Input onChange={handleChange} value={formData.age} name={"age"} />
      <Input onChange={handleChange} value={formData.email} name={"email"} />
      <Input
        onChange={handleChange}
        type={"password"}
        value={formData.password}
        name={"password"}
      />
      <Button
        text={"회원가입"}
        disabled={
          formData.name.length === 0 ||
          formData.email.length === 0 ||
          formData.password.length === 0 ||
          formData.age === undefined
        }
      />
    </Form>
  );
};

export default SignUpPresenter;
