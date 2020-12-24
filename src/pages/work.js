import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, aniVariants } from '../imports/variables';
import FeaturedItem from '../components/featuredItem';
import Footer from '../components/footer';

const WorkWrapper = styled(motion.div)`
  margin: 270px 0 200px 0;
  width: 100%;
  position: relative;
`;

const FeaturedWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 150px;
  position: relative;
`;

const OtherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const WrapperHeading = styled(motion.div)`
  width: 100%;
  font-size: ${font.h2};
  font-family: 'Oswald', sans-serif;
  color: ${colors.accent};
  margin-bottom: 100px;
  text-transform: uppercase;
  position: relative;
`;

const OtherProjectWrapper = styled.div`
  height: 275px;
  margin: 25px;
  overflow: hidden;
  width: 275px;
  a {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      height: 100%;
    }
  }
`;

export default function Work({ data }) {
  return (
    <>
      <WorkWrapper
        variants={aniVariants.parent}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <FeaturedWrapper variants={aniVariants.parent}>
          <WrapperHeading variants={aniVariants.child}>
            Featured Projects
          </WrapperHeading>
          {data.featured.edges.map((item) => (
            <FeaturedItem
              key={item.node.id}
              item={item.node}
              variants={aniVariants.child}
            />
          ))}
        </FeaturedWrapper>
        <OtherWrapper>
          <WrapperHeading>Other Projects</WrapperHeading>
          {data.other.edges.map((item) => (
            <OtherProjectWrapper key={item.node.id}>
              <a href={item.node.behanceUrl} target="_blank" rel="noreferrer">
                <img src={item.node.thumbImg} alt="" />
              </a>
            </OtherProjectWrapper>
          ))}
        </OtherWrapper>
      </WorkWrapper>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    featured: allFeaturedPortfolioJson {
      edges {
        node {
          id
          title
          service
          slug
          portImg
        }
      }
    }

    other: allOtherProjectsJson {
      edges {
        node {
          id
          thumbImg
          behanceUrl
        }
      }
    }
  }
`;
