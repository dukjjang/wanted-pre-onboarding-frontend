import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Todos from 'pages/Todos';
import { useRedirect } from './hooks/useRedirect';

function App() {
  useRedirect();
  return (
    <div>
      <Routes>
        <Route index element={<Auth />} />
        <Route path='/todo' element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
