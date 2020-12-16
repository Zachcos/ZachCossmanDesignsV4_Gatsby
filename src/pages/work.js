import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';
import FeaturedItem from '../components/featuredItem';

const WorkWrapper = styled.div`
  display: flex;
  margin: 270px 0 200px 0;
  /* margin: 270px 0 0 0; */
  width: 100%;
`;

const FeaturedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .heading {
    width: 100%;
    font-size: ${font.h2};
    font-family: 'Oswald', sans-serif;
    color: ${colors.accent};
    margin-bottom: 100px;
    text-transform: uppercase;
  }
`;

export default function Work() {
  return (
    <WorkWrapper>
      <FeaturedWrapper>
        <div className="heading">Featured Projects</div>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </FeaturedWrapper>
    </WorkWrapper>
  );
}
