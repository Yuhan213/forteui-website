import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Elective3Page from './components/Elective3Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/elective-3" element={<Elective3Page />} />
      </Routes>
    </Router>
  );
}

export default App;
