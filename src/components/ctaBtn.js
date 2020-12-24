import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../imports/variables';

const Cta = styled.div`
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
  transition: 0.3s;
  width: 230px;
  &:after {
    background: ${colors.accent};
    bottom: 0;
    content: '';
    height: 5px;
    left: 50%;
    position: absolute;
    transition: 0.3s;
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

export default function CtaBtn({ variants }) {
  return (
    <motion.a
      variants={variants}
      href="mailto: zachcos@gmail.com?subject=Hey Zach!"
      style={{ position: 'relative', textDecoration: 'none' }}
    >
      <Cta>zachcos@gmail.com</Cta>
    </motion.a>
  );
}
