import React from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from '../imports/globalStyle';

import Navbar from './navbar';

interface Props {
  location: {
    pathname: string;
  };
  children: JSX.Element;
}

const Layout = ({ location, children }: Props) => {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='description'
          content='Zach Cossman Designs - Custom performant websites'
        />
        <title>Zach Cossman Designs</title>
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <div className='full-wrap' key={location.pathname}>
        <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>
      </div>
    </>
  );
};

export default Layout;
