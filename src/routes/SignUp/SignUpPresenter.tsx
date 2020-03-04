import React from 'react';
import Form from 'src/components/atoms/Form';
import Input from 'src/components/atoms/Input';

interface Props {}

const SignUpPresenter: React.FC<Props> = () => {
  return (
    <div>
      <Form onSubmit={null}>
        <Input type={"text"} placeholder={"email"} value={""} name={"email"} />
      </Form>
    </div>
  );
};

export default SignUpPresenter;
