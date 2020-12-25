import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import { colors, font, breakpoints } from '../imports/variables';

import logo from '../../static/images/zcd_logo2.svg';

const NavbarContainer = styled(motion.div)`
  align-items: center;
  background: ${colors.darkGrey};
  display: flex;
  height: 120px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const LogoContainer = styled.div`
  height: 45px;
  margin: 0 auto 0 60px;
  width: 32px;
  img {
    height: 100%;
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin: 0 auto 0 40px;
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
      transition: 0.2s ease-out;
      width: 100%;
    }
    &.text-link:hover:after {
      bottom: -5px;
      opacity: 1;
    }
    &.icon-link {
      transition: all 0.2s ease-out;
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
      transition: all 0.2s ease-out;
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
  @media screen and (max-width: ${breakpoints.phone}) {
    background: ${colors.darkGrey};
    display: flex;
    flex-direction: column;
    font-size: ${font.h5};
    height: 100vh;
    justify-content: space-around;
    margin-right: 0;
    position: fixed;
    right: -100%;
    top: 0;
    transition: 0.6s ease-out;
    width: 100%;
    z-index: 1;
    &.open {
      right: 0;
    }
  }
`;

const HamburgerMenu = styled.div`
  width: 25px;
  height: 32px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  padding: 20px;
  position: relative;
  z-index: 100;
  &.open {
    span:first-child {
      top: 5px;
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      top: -5px;
      transform: rotate(45deg);
    }
  }
  span {
    display: block;
    width: 100%;
    height: 3px;
    margin-bottom: 7px;
    background: white;
    position: relative;
    transition: 0.2s ease-out;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    display: flex;
  }
`;

export default function Navbar() {
  const [shouldShow, setShouldShow] = useState(true);
  const [lastYPos, setLastYPos] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShow(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <>
      <NavbarContainer
        animate={{ top: shouldShow || isMobile ? 0 : '-120px' }}
        initial={{ top: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <LogoContainer>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </LogoContainer>
        <HamburgerMenu
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? 'open' : ''}
        >
          <span />
          <span />
        </HamburgerMenu>
        <NavbarItems className={isOpen ? 'open' : ''}>
          <Link
            to="/work"
            alt=""
            className="text-link"
            onClick={() => setIsOpen(false)}
          >
            work
          </Link>
          <Link
            to="/about"
            alt=""
            className="text-link"
            onClick={() => setIsOpen(false)}
          >
            about
          </Link>
          <a
            href="mailto: zachcos@gmail.com?subject=Hey Zach!"
            alt=""
            className="text-link"
          >
            email me
          </a>
          <a
            href="https://behance.net/Zachcos"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <i className="fab fa-lg fa-behance" />
          </a>
          <a
            href="https://github.com/Zachcos"
            target="_blank"
            rel="noreferrer"
            className="icon-link"
          >
            <i className="fab fa-lg fa-github" />
          </a>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
}
