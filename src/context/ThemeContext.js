import React, { useState, useEffect, useMemo } from 'react';

const ThemeContext = React.createContext(false);

function ThemeProvider({ children }) {
  // Get dark mode preference from local storage if it exists. Otherwise, default preference to false.
  // Have to check to make sure that window exists first, so that we don't break gatsby build
  const [prefersDark, setPrefersDark] = useState(
    JSON.parse(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('prefersDark')) ||
        'false'
    )
  );

  const toggleDark = () => {
    const newPreference = !prefersDark;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('prefersDark', JSON.stringify(newPreference));
    }
    setPrefersDark(newPreference);
  };

  useEffect(() => {
    if (prefersDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [prefersDark]);

  // We use useMemo here to avoid passing in a new object to ThemeContext.Provider
  // every time ThemeProvider re-renders. Passing in a new value to ThemeContext.Provider
  // on every render will cause all Consumer components to re-render, potentially unnecessarily.
  // More info: https://ui.dev/react-context/
  const value = useMemo(
    () => ({
      prefersDark,
      toggleDark,
    }),
    [prefersDark]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeProvider };
