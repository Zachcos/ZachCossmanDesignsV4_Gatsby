import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import GlobalStyle from '../imports/globalStyle';

import Navbar from './navbar';

const ContentContainer = styled.div`
  margin: 0 60px;
`;

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Zach Cossman Designs</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/c3abb1e5c6.js"
          crossOrigin="anonymous"
        />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
    </>
  );
}
