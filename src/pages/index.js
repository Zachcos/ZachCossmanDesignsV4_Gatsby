import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';
import CtaBtn from '../components/ctaBtn';

const HeroContainer = styled.div`
  margin-top: 100px;
  width: 695px;
`;

const HeroDisplayText = styled.h1`
  color: ${colors.accent};
  font-family: Oswald, sans-serif;
  font-size: ${font.h1};
  line-height: 1.2em;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const HeroDisplayCopy = styled.p`
  line-height: 2em;
  margin-bottom: 50px;
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
      transition: all 0.3s ease-out;
      width: 100%;
    }
    &:hover:after {
      bottom: -4px;
      opacity: 1;
    }
  }
`;

export default function Home() {
  return (
    <HeroContainer>
      <HeroDisplayText>
        Hi, I'm Zach — I design and develop websites
      </HeroDisplayText>
      <HeroDisplayCopy>
        For over 10 years I've been designing and developing sites and web
        experiences for companies and creative individuals. Check out my work,
        learn more{' '}
        <a href="#" alt="">
          about me
        </a>
        , and get in touch...
      </HeroDisplayCopy>
      <CtaBtn />
    </HeroContainer>
  );
}
