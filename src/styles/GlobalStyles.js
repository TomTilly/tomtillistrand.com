import { createGlobalStyle } from 'styled-components';
import { headingStyles } from '../utilities';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --purple: #3748D6;
    --green: #00B084;
    --red: #FF3B48;
    --black: #333333;
    --gray-100: #F2F2F2;
    --gray-200: #E0E0E0;
    --gray-300: #BDBDBD;
    --gray-400: #828282;
    --gray-500: #4F4F4F;
    --white: #EFEFEF;

    /* Color Intentions */
    --primary: var(--purple);
    --secondary: var(--green);
    --tertiary: var(--red);
    --body-bg: var(--white);
    --body-text-color: var(--black);
    --header-bg: var(--white);
    --outline-color: var(--primary);

    /* Typography */
    --system-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', sans-serif;
    --body-font: Karla, var(--system-stack);
    --heading-font: Rubik, var(--system-stack);
    --root-font-size: 62.5%;
    --body-font-size: 1.8rem;
    --h1: 5.49rem;
    --h2: 4.4rem;
    --h3: 3.51rem;
    --h4: 2.81rem;
    --h5: 2.3rem;
    --h6: 1.8rem;
    --small-text: 1.4rem;

      /* Elevation */
    --level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --level-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --level-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --level-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

      /* Spacing and Sizing */
      --container-max-width: 1040px;
      --border-radius: 6px;
  }

  html {
    box-sizing: border-box;
    line-height: 1.6;
    font-size: var(--root-font-size);
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    color: var(--body-text-color);
    font-size: var(--body-font-size);
    font-family: var(--body-font);
    background: var(--body-bg);
    line-height: 1.7;
    letter-spacing: .15px;
    min-height: 100vh;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p a {
    color: var(--body-text-color);
    text-decoration: none;
    border-bottom: solid 2px var(--primary);
  }

  p {
    margin: 0 0 0.75em;
  }

  h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    ${headingStyles};
  }

  label {
    display: block;
    font-weight: bold;
  }

  input, textarea {
    --background-color: var(--white);
    padding: 1.2rem;
    background-color: var(--background-color);
    border: 1px solid;
    border-color: var(--gray-300);
    border-radius: var(--border-radius);
  }

  ::placeholder {
    color: var(--gray-300);
  }

  input, textarea, button {
    outline-color: var(--outline-color);
  }
`;

export default GlobalStyles;
