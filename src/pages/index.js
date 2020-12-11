import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';

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
`;

export default function Home() {
  return (
    <HeroContainer>
      <HeroDisplayText>
        Hi, I'm Zach — I design and develop websites
      </HeroDisplayText>
      <HeroDisplayCopy>
        For over 10 years I've been designing and developing sites and web
        experiences for companies and creative individuals. Check out some of my
        work, learn more about me, and get in touch...
      </HeroDisplayCopy>
    </HeroContainer>
  );
}
