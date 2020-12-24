import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';
import CtaBtn from './ctaBtn';

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
    i {
      margin-right: 15px;
    }
    a {
      color: ${colors.lightGrey};
      cursor: pointer;
      display: block;
      padding: 10px 5px;
      position: relative;
      text-decoration: none;
      transition: 0.3s ease-out;
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
        bottom: -3px;
        opacity: 1;
      }
      &.arrow {
        bottom: 0;
        padding: 10px 5px;
        transition: 0.2s ease-out;
        i {
          transition: 0.2s ease-out;
        }
        &:hover {
          bottom: 15px;
          i {
            color: ${colors.accent};
          }
        }
      }
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
            <i className="fab fa-lg fa-behance" />
            <span>Behance</span>
          </a>
          <a
            href="https://www.github.com/Zachcos"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            <i className="fab fa-lg fa-github" />
            <span>GitHub</span>
          </a>
          <a className="arrow" onClick={scrollUp}>
            <i className="fas fa-lg fa-arrow-up" />
          </a>
        </div>
      </FooterNav>
    </FooterWrapper>
  );
}
