import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyle from '../imports/globalStyle';

import Navbar from './navbar';

const ContentContainer = styled(motion.div)`
  margin: 0 60px;
`;

export default function Layout({ children, location }) {
  const duration = 0.5;
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration,
        delay: duration,
        when: 'beforeChildren',
      },
    },
    exit: {
      opacity: 0,
      transition: { duration },
    },
  };

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
      <AnimatePresence exitBeforeEnter>
        <ContentContainer
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </ContentContainer>
      </AnimatePresence>
    </>
  );
}
