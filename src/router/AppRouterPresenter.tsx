import React from 'react';

interface Props {
  data: {
    id: number;
    email: string;
    name: string;
    age: number | string;
  };
}

const AppRouterPresenter: React.FC<Props> = ({ data }) => {
  return <div>AppRouterPresenter</div>;
};

export default AppRouterPresenter;
