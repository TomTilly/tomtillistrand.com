import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>{children}</ThemeProvider>
      <Footer />
    </>
  );
}
