import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Todos from 'pages/Todos';

function App() {
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
