import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, breakpoints } from '../imports/variables';

const ItemWrapper = styled(motion.div)`
  margin: 0 20px 70px;
  position: relative;
  width: 325px;
  .image-frame {
    height: 325px;
    margin-bottom: 15px;
    overflow: hidden;
    width: 325px;
    position: relative;
    img {
      height: 100%;
      position: relative;
      right: 50%;
    }
  }
  .title {
    color: ${colors.accent};
    font-family: 'Oswald', sans-serif;
    font-size: ${font.h4};
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  .details {
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: space-between;
    .service {
      font-size: ${font.h5};
      font-weight: 300;
      .subheading {
        font-family: 'Oswald', sans-serif;
        font-size: 0.85rem;
        font-weight: 300;
        letter-spacing: 3px;
        margin-bottom: 10px;
        opacity: 0.65;
        text-transform: uppercase;
      }
    }
  }
  .links {
    align-items: center;
    display: flex;
    height: 100%;
    position: relative;
    width: 125px;
    &:hover {
      a {
        i {
          color: ${colors.accent};
          right: -10px;
        }
      }
    }
    span {
      font-family: 'Oswald', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
      width: 150px;
    }
    a {
      align-items: center;
      color: ${colors.lightGrey};
      display: flex;
      padding: 15px;
      position: relative;
      right: 0;
      text-decoration: none;
      transition: 0.2s ease-out;
      i {
        position: relative;
        right: 0;
        transition: 0.2s ease-out;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    margin-bottom: 100px;
    width: 100%;
    .image-frame {
      height: 350px;
      width: 100%;
      img {
        right: 0;
      }
    }
  }
`;

export default function FeaturedItem({ item, variants }) {
  return (
    <ItemWrapper variants={variants}>
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
          <Link to={item.slug}>
            <span>learn more</span>
            <i className="fas fa-lg fa-arrow-right" />
          </Link>
        </div>
      </div>
    </ItemWrapper>
  );
}
