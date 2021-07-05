import React from 'react';
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
