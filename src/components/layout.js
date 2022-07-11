import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyle from '../imports/globalStyle';
import { breakpoints } from '../imports/variables';

import Navbar from './navbar';

const ContentContainer = styled(motion.div)`
  margin: 0 60px;
  @media screen and (max-width: ${breakpoints.phone}) {
    margin: 0 35px;
  }
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
        <html lang="en" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Zach Cossman Designs - Custom performant websites"
        />
        <title>Zach Cossman Designs</title>
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
