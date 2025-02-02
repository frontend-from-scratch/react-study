import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Daba from './pages/daba';
import Button from './pages/ButtonPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">다바</Link> | <Link to="/button">버튼</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Daba />} />
        <Route path="/button" element={<Button />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
