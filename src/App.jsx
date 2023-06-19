import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchAppBar from './components/SearchAppBar';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <div>
      <SearchAppBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
