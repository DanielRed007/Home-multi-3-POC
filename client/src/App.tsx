import React, { useContext } from 'react';

import { ThemeContext } from './ThemeContext';
import './App.scss';

export const App: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <div>
        <h1 className={`app-title app-title-${theme}`}>React App with Theme Switching</h1>
        <div className="button-container">
        <button className={`theme-button theme-button-${theme}`} onClick={() => handleThemeChange('light')}>
            Light
        </button>
        <button className={`theme-button theme-button-${theme}`} onClick={() => handleThemeChange('dark')}>
            Dark
        </button>
        <button className={`theme-button theme-button-${theme}`} onClick={() => handleThemeChange('blue')}>
            Blue
        </button>
        </div>
    </div>
  );
};
