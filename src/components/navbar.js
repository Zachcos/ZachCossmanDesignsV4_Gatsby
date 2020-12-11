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
  display: flex;
  font-family: Oswald, sans-serif;
  font-size: ${font.base};
  justify-content: space-between;
  margin-right: 60px;
  width: 400px;
`;

export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
        <NavbarItems>
          <div>work</div>
          <div>about</div>
          <div>email me</div>
          <div>
            <i className="fab fa-lg fa-behance" />
          </div>
          <div>
            <i className="fab fa-lg fa-github" />
          </div>
        </NavbarItems>
      </NavbarContainer>
    </>
  );
}
