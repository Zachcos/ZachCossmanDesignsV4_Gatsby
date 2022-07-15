import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, breakpoints } from '../imports/variables';

const ItemWrapper = styled(motion.div)`
  height: 550px;
  margin: 0 0 100px 0;
  position: relative;
  width: 100%;
  .image-frame {
    height: 550px;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    width: 100%;
    img {
      height: 100%;
      object-fit: cover;
      position: relative;
      top: 0;
      transition: 0.3s ease-out;
      width: 100%;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .title {
    color: ${colors.darkGrey};
    font-family: 'Oswald', sans-serif;
    font-size: ${font.base};
    font-weight: 100;
    margin-bottom: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    height: 350px;
    .image-frame {
      height: 350px;
    }
  }
`;

interface Props {
  item: {
    id: string;
    portImg: string;
    slug: string;
    title: string;
  };
  variants?: ParentAniProps | ChildAniProps;
}

const FeaturedItem = ({ item, variants }: Props) => {
  return (
    <ItemWrapper {...variants}>
      <Link to={item.slug}>
        <div className='image-frame'>
          <img src={item.portImg} alt='' />
        </div>
        <div className='title'>{item.title}</div>
      </Link>
    </ItemWrapper>
  );
};

export default FeaturedItem;
