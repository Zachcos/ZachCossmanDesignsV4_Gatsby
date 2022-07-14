import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, aniVariants, breakpoints } from '../imports/variables';
import CtaBtn from '../components/ctaBtn';

const HeroContainer = styled(motion.div)`
  margin-top: 220px;
  position: relative;
  width: 695px;
  @media screen and (max-width: ${breakpoints.tablet}) {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin-top: 150px;
  }
`;

const HeroDisplayText = styled(motion.h1)`
  color: ${colors.accent};
  font-family: Oswald, sans-serif;
  font-size: ${font.h1};
  line-height: 1.2em;
  margin-bottom: 50px;
  position: relative;
  text-transform: uppercase;
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 120px;
    text-align: center;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: ${font.h3};
    margin-bottom: 60px;
  }
`;

const HeroDisplayCopy = styled(motion.p)`
  line-height: 2em;
  margin-bottom: 50px;
  position: relative;
  a {
    text-decoration: none;
    color: ${colors.lightGrey};
    position: relative;
    &:after {
      background: ${colors.accent};
      bottom: -8px;
      content: '';
      height: 3px;
      left: 0;
      opacity: 0.2;
      position: absolute;
      transition: all 0.15s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -4px;
      opacity: 1;
    }
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 120px;
    text-align: center;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin-bottom: 60px;
  }
`;

const Home = () => {
  return (
    <HeroContainer
      variants={aniVariants.parent}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <HeroDisplayText variants={aniVariants.child}>
        Hi, I'm Zach — I design and develop websites
      </HeroDisplayText>
      <HeroDisplayCopy variants={aniVariants.child}>
        For over 10 years I've been designing and developing sites and web
        experiences for companies and creative individuals. Check out my work,
        learn more{' '}
        <Link to='/about' aria-label='about'>
          about me
        </Link>
        , and get in touch...
      </HeroDisplayCopy>
      <CtaBtn variants={aniVariants.child} />
    </HeroContainer>
  );
};

export default Home;
