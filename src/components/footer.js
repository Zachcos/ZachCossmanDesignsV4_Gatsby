/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { colors, font, breakpoints } from '../imports/variables';
import CtaBtn from './ctaBtn';
import { Behance, Github, Arrow } from './icons';

const FooterWrapper = styled.div`
  height: 450px;
  position: relative;
  width: 100%;
  .cta {
    display: flex;
    flex-direction: column;
    .title {
      color: ${colors.accent};
      font-family: 'Oswald', sans-serif;
      font-size: ${font.h3};
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    .copy {
      font-size: ${font.base};
      margin-bottom: 50px;
    }
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    .cta {
      align-items: center;
      .title {
        font-size: 2.2rem;
        margin-bottom: 35px;
        text-align: center;
      }
      .copy {
        line-height: 1.6em;
        text-align: center;
      }
    }
  }
`;

const FooterNav = styled.div`
  bottom: 0;
  display: flex;
  margin-bottom: 50px;
  position: absolute;
  width: 100%;
  .attribution {
    font-size: 0.9rem;
    margin-right: auto;
    display: flex;
    align-items: center;
  }
  .linkWrapper {
    display: flex;
    justify-content: space-between;
    width: 400px;
    svg {
      position: relative;
      top: 5px;
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    a {
      color: ${colors.lightGrey};
      cursor: pointer;
      padding: 10px 5px;
      position: relative;
      text-decoration: none;
      transition: all 0.15s ease-out;
      &.text-link:after {
        background: ${colors.accent};
        bottom: -10px;
        content: '';
        height: 3px;
        left: 0;
        opacity: 0;
        position: absolute;
        transition: 0.15s ease-out;
        width: 100%;
      }
      &.text-link:hover:after {
        bottom: -3px;
        opacity: 1;
      }
      &.arrow {
        bottom: 0;
        padding: 10px 5px;
        transform: rotate(-90deg);
        transition: all 0.15s ease-out;
        svg {
          transition: all 0.15s ease-out;
        }
        &:hover {
          bottom: 15px;
          svg {
            fill: ${colors.accent};
          }
        }
      }
    }
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    flex-direction: column-reverse;
    margin-bottom: 20px;
    .attribution {
      display: block;
      margin: 20px 0 0 0;
      text-align: center;
      width: 100%;
    }
    .linkWrapper {
      width: 100%;
    }
  }
`;

export default function Footer() {
  function scrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <FooterWrapper>
      <div className="cta">
        <div className="title">Let's work together</div>
        <div className="copy">
          What can I help you with? Feel free to drop a line...
        </div>
        <CtaBtn />
      </div>
      <FooterNav>
        <div className="attribution">&copy; Zach Cossman 2020</div>
        <div className="linkWrapper">
          <a
            href="https://www.behance.net/Zachcos"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Behance />
            <span>Behance</span>
          </a>
          <a
            href="https://www.github.com/Zachcos"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <Github />
            <span>GitHub</span>
          </a>
          <a className="arrow" onClick={scrollUp}>
            <Arrow />
          </a>
        </div>
      </FooterNav>
    </FooterWrapper>
  );
}
