import React from 'react';
import { COLOR_MODE_CSS_PROP } from './src/constants';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

const MagicScriptTag = () => {
  const codeToRunOnClient = `
    (function () {
      function getInitialPreference() {
        const persistedColorPreference = window.localStorage.getItem('prefersDark');
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedColorPreference;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'true' : 'false';
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'false';
      }
    
      const prefersDark = getInitialPreference();
      const root = document.documentElement;

      if (prefersDark === 'true') root.dataset.colorScheme = 'dark';
      root.style.setProperty('--initial-color-mode', prefersDark === 'true' ? 'dark' : 'light');
    })();
  `;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};
