import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../imports/variables';

const Cta = styled(motion.div)`
  align-items: center;
  background: ${colors.lightGrey};
  color: ${colors.darkGrey};
  display: flex;
  font-size: 0.9rem;
  font-weight: 600;
  height: 65px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 0.15s ease-out;
  width: 230px;
  &:after {
    background: ${colors.accent};
    bottom: 0;
    content: '';
    height: 5px;
    left: 50%;
    position: absolute;
    transition: 0.15s ease-out;
    width: 0;
  }
  &:hover {
    cursor: pointer;
    &:after {
      left: 0;
      width: 100%;
    }
  }
`;

const CtaBtn = ({ ...variants }: ChildAniProps) => {
  return (
    <Cta {...variants}>
      <a href='mailto: zachcos@gmail.com?subject=Hey Zach!'>
        <Cta>zachcos@gmail.com</Cta>
      </a>
    </Cta>
  );
};

export default CtaBtn;
