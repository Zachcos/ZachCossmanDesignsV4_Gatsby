import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';

import logo from '../../static/images/zcd_logo2.svg';

const NavbarContainer = styled.div`
  align-items: center;
  background: ${colors.darkGrey};
  display: flex;
  height: 120px;
  width: 100%;
`;

const LogoContainer = styled.div`
  height: 45px;
  margin: 0 auto 0 60px;
  width: 32px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const NavbarItems = styled.div`
  align-items: center;
  display: flex;
  font-family: Oswald, sans-serif;
  font-size: ${font.base};
  justify-content: space-between;
  margin-right: 60px;
  width: 400px;
  a {
    color: ${colors.lightGrey};
    cursor: pointer;
    padding: 5px;
    position: relative;
    text-decoration: none;
    &.text-link:after {
      background: ${colors.accent};
      bottom: -10px;
      content: '';
      height: 3px;
      left: 0;
      opacity: 0;
      position: absolute;
      transition: 0.3s ease-in-out;
      width: 100%;
    }
    &.text-link:hover:after {
      bottom: -5px;
      opacity: 1;
    }
    &.icon-link {
      transition: all 0.3s ease-out;
      z-index: 1;
    }
    &.icon-link:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 50%;
      width: 0%;
      height: 0%;
      transform: translate(-50%, 50%);
      opacity: 1;
      background: ${colors.accent};
      border-radius: 50%;
      transition: all 0.3s ease-out;
      z-index: -1;
    }
    &.icon-link:hover {
      color: ${colors.darkGrey};
      &:after {
        height: 100%;
        width: 100%;
      }
    }
  }
  a > i {
    align-items: center;
    display: flex;
    height: 40px;
    justify-content: center;
    width: 40px;
  }
`;

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
        <NavbarItems>
          <a href="#" alt="" className="text-link">
            work
          </a>
          <a href="#" alt="" className="text-link">
            about
          </a>
          <a href="#" alt="" className="text-link">
            email me
          </a>
          <a className="icon-link">
            <i className="fab fa-lg fa-behance" />
          </a>
          <a className="icon-link">
            <i className="fab fa-lg fa-github" />
          </a>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
}
