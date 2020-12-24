import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font } from '../imports/variables';
import CtaBtn from '../components/ctaBtn';

const HeroContainer = styled(motion.div)`
  margin-top: 220px;
  width: 695px;

  position: relative;
`;

const HeroDisplayText = styled(motion.h1)`
  color: ${colors.accent};
  font-family: Oswald, sans-serif;
  font-size: ${font.h1};
  line-height: 1.2em;
  margin-bottom: 50px;
  text-transform: uppercase;

  position: relative;
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
      transition: all 0.2s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -4px;
      opacity: 1;
    }
  }
`;

export default function Home() {
  const parent = {
    initial: { top: '100px' },
    animate: {
      top: 0,
      transition: {
        duration: 1.2,
        delayChildren: 0.3,
        staggerChildren: 0.25,
        ease: 'easeOut',
      },
    },
    exit: {
      top: '-50px',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      top: '40px',
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
    exit: {},
  };

  return (
    <HeroContainer
      variants={parent}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroDisplayText variants={child}>
        Hi, I'm Zach — I design and develop websites
      </HeroDisplayText>
      <HeroDisplayCopy variants={child}>
        For over 10 years I've been designing and developing sites and web
        experiences for companies and creative individuals. Check out my work,
        learn more{' '}
        <Link to="/about" alt="">
          about me
        </Link>
        , and get in touch...
      </HeroDisplayCopy>
      <CtaBtn variants={child} />
    </HeroContainer>
  );
}
