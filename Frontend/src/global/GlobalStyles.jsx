import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
        /* Grey */
    --color-grey-0: #fff;
    --color-grey-50: #f8f9fa;
    --color-grey-100: #e9ecef;
    --color-grey-200: #dee2e6;
    --color-grey-300: #ced4da;
    --color-grey-400: #adb5bd;
    --color-grey-500: #6c757d;
    --color-grey-600: #495057;
    --color-grey-700: #343a40;
    --color-grey-800: #212529;
    --color-grey-900: #111827;

    --color-beige-0: #fff5ec;
    --color-beige-50: #f6e7db;
    --color-beige-100: #edd9ca;
    --color-beige-200: #e4cab9;

    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

    --border-radius-sm: 2.3rem;
    --border-radius-md: 1.6rem;
    --border-radius-lg: 2.3rem;
  
}

*,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Open Sans", sans-serif;
    color: var(--color-silver-700);

  background: linear-gradient(115deg, var(--color-beige-0), var(--color-silver-100));

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: auto;
}

`;
export default GlobalStyles;
