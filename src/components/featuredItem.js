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
