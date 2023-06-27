import React, { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'dark',
  setTheme: (themeName: string) => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const handleThemeChange = (themeName: string) => {
    setTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
