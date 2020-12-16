import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';
import FeaturedItem from '../components/featuredItem';

const WorkWrapper = styled.div`
  margin: 270px 0 200px 0;
  width: 100%;
`;

const FeaturedWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 150px;
`;

const OtherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const WrapperHeading = styled.div`
  width: 100%;
  font-size: ${font.h2};
  font-family: 'Oswald', sans-serif;
  color: ${colors.accent};
  margin-bottom: 100px;
  text-transform: uppercase;
`;

const TempImage = styled.div`
  width: 225px;
  height: 225px;
  margin: 25px;
  background: lightcoral;
`;

export default function Work() {
  return (
    <WorkWrapper>
      <FeaturedWrapper>
        <WrapperHeading>Featured Projects</WrapperHeading>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </FeaturedWrapper>
      <OtherWrapper>
        <WrapperHeading>Other Projects</WrapperHeading>
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
        <TempImage />
      </OtherWrapper>
    </WorkWrapper>
  );
}
