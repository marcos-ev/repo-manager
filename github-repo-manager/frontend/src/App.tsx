// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImportPage from './pages/ImportPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/import" element={<ImportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
