import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{ children }</main>
      <Footer />
    </>
  );
}