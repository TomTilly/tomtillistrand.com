import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import { ThemeProvider } from '../context/ThemeContext';
import SEO from './SEO';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>{children}</ThemeProvider>
      <Footer />
    </>
  );
}
