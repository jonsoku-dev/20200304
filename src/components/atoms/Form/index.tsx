import React from 'react';

interface Props {
  onSubmit: any;
}

const Form: React.FC<Props> = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default Form;
