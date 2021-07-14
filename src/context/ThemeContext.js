import React, { useState, useEffect, useMemo } from 'react';

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  // Get dark mode preference from local storage if it exists. Otherwise, default preference to false.
  // Have to check to make sure that window exists first, so that we don't break gatsby build
  const [prefersDark, setPrefersDark] = useState(undefined);

  useEffect(() => {
    const root = document.documentElement;

    const initialPreference = root.style.getPropertyValue(
      '--initial-color-mode'
    );

    setPrefersDark(initialPreference === 'dark');
  }, []);

  // We use useMemo here to avoid passing in a new object to ThemeContext.Provider
  // every time ThemeProvider re-renders. Passing in a new value to ThemeContext.Provider
  // on every render will cause all Consumer components to re-render, potentially unnecessarily.
  // More info: https://ui.dev/react-context/
  const value = useMemo(() => {
    const toggleDark = () => {
      const newPreference = !prefersDark;
      document.body.classList.toggle('dark-mode');
      window.localStorage.setItem('prefersDark', JSON.stringify(newPreference));
      setPrefersDark(newPreference);
    };

    return {
      prefersDark,
      toggleDark,
    };
  }, [prefersDark, setPrefersDark]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider };
