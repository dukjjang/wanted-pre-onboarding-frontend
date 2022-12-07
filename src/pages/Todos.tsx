import React from 'react';
import { useRedirect } from '../hooks/useRedirect';

const Todos = () => {
  useRedirect();
  return <div>Todo리스트</div>;
};
export default Todos;
