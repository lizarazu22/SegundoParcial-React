import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const SettingsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Theme:
          <select value={theme} onChange={toggleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SettingsPage;
