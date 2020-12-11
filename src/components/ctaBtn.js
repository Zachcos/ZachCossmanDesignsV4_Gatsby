import React from 'react';
import styled from 'styled-components';
import { colors } from '../imports/variables';

const Cta = styled.button`
  background: ${colors.lightGrey};
  border: none;
  color: ${colors.darkGrey};
  font-size: 0.9rem;
  font-weight: 600;
  height: 65px;
  overflow: hidden;
  position: relative;
  width: 230px;
  transition: 0.3s;
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

export default function CtaBtn() {
  return <Cta>zachcos@gmail.com</Cta>;
}
