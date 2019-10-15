import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 14px;
  }
`;

export const withGlobalStyle = story => (
  <>
    <GlobalStyle />
    {story()}
  </>
);
