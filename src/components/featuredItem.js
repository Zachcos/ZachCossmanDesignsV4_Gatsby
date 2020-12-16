import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';

const ItemWrapper = styled.div`
  width: 325px;
  margin: 0 20px 70px;
  .title {
    font-family: 'Oswald', sans-serif;
    font-size: ${font.h4};
    color: ${colors.accent};
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .service {
      font-weight: 300;
      font-size: ${font.h5};
      .subheading {
        font-family: 'Oswald', sans-serif;
        font-size: 0.85rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 3px;
        opacity: 0.65;
        margin-bottom: 10px;
      }
    }
  }
  .links {
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: ${colors.lightGrey};
      transition: 0.3s ease-in-out;
      &:hover {
        color: ${colors.accent};
      }
    }
  }
  //? Begin temp image placeholder //
  .temp-image {
    background: lightcoral;
    height: 325px;
    width: 325px;
    margin-bottom: 15px;
  }
  //? End temp image placeholder //
`;

export default function FeaturedItem() {
  return (
    <ItemWrapper>
      <div className="temp-image" />
      <div className="title">Zach Cossman Designs v3</div>
      <div className="details">
        <div className="service">
          <div className="subheading">Service</div>
          Web
        </div>
        <div className="links">
          <a href="#">
            <i className="fab fa-lg fa-github" />
          </a>
          <a href="#">
            <i className="fas fa-lg fa-external-link-alt" />
          </a>
        </div>
      </div>
    </ItemWrapper>
  );
}
