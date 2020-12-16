import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { colors, font } from '../imports/variables';
import FeaturedItem from '../components/featuredItem';
import Footer from '../components/footer';

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

export default function Work({ data }) {
  return (
    <>
      <WorkWrapper>
        <FeaturedWrapper>
          <WrapperHeading>Featured Projects</WrapperHeading>
          {data.allFeaturedPortfolioJson.edges.map((item) => (
            <FeaturedItem key={item.node.id} item={item.node} />
          ))}
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
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    allFeaturedPortfolioJson {
      edges {
        node {
          id
          title
          slug
          portImg
        }
      }
    }
  }
`;
