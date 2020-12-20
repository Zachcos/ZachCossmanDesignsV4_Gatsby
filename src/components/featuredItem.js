import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';

const ItemWrapper = styled.div`
  width: 325px;
  //! Fix margins! //
  margin: 0 20px 70px;
  .image-frame {
    height: 325px;
    width: 325px;
    margin-bottom: 15px;
    overflow: hidden;
    position: relative;
    img {
      position: relative;
      right: 50%;
      height: 100%;
    }
  }
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
    position: relative;
    width: 125px;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover {
      a {
        right: -10px;
        color: ${colors.accent};
      }
    }
    span {
      font-family: 'Oswald', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    a {
      padding: 15px;
      position: relative;
      right: 0;
      text-decoration: none;
      color: ${colors.lightGrey};
      transition: 0.2s ease-out;
      i {
        width: 100%;
      }
    }
  }
`;

export default function FeaturedItem({ item }) {
  return (
    <ItemWrapper>
      <div className="image-frame">
        <img src={item.portImg} alt="" />
      </div>
      <div className="title">{item.title}</div>
      <div className="details">
        <div className="service">
          <div className="subheading">Service</div>
          {item.service}
        </div>
        <div className="links">
          <span>learn more</span>
          <a href="#">
            <i className="fas fa-lg fa-arrow-right" />
          </a>
        </div>
      </div>
    </ItemWrapper>
  );
}
