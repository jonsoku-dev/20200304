import React from 'react';
import AppRouterPresenter from './AppRouterPresenter';

interface Props {}

const DUMMY_DATA = {
  id: 1,
  email: "the2792@gmail.com",
  name: "ricky lee",
  age: 28
};

const AppRouterContainer: React.FC<Props> = () => {
  return <AppRouterPresenter data={DUMMY_DATA} />;
};

export default AppRouterContainer;
