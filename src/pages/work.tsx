import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, breakpoints } from '../imports/variables';
import { stagger, fadeUpIn, fadeUpInWithChildren } from '../imports/animations';
import FeaturedItem from '../components/featuredItem';
import Footer from '../components/footer';

const WorkWrapper = styled(motion.div)`
  margin: 270px 0 200px 0;
  position: relative;
  width: 100%;
  @media screen and (max-width: ${breakpoints.phone}) {
    margin: 170px 0 100px 0;
  }
`;

const FeaturedWrapper = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 150px;
  position: relative;
  width: 100%;
  @media screen and (max-width: ${breakpoints.phone}) {
    margin-bottom: 100px;
  }
`;

const OtherWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

const WrapperHeading = styled(motion.div)`
  color: ${colors.accent};
  font-family: 'Oswald', sans-serif;
  font-size: ${font.h2};
  margin-bottom: 100px;
  position: relative;
  text-transform: uppercase;
  width: 100%;
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: ${font.h3};
    text-align: center;
  }
`;

const OtherProjectWrapper = styled.div`
  height: 275px;
  margin: 25px;
  overflow: hidden;
  width: 275px;
  a {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    img {
      height: 100%;
      transition: 0.25s ease-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    height: 200px;
    margin: 15px;
    width: 200px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    height: 130px;
    margin: 15px 0;
    width: 130px;
  }
`;

interface Props {
  data: {
    featured: {
      edges: {
        node: FeaturedItemProps;
        map: Function;
      };
    };
    other: {
      edges: {
        node: OtherItemProps;
        map: Function;
      };
    };
  };
}

interface FeaturedProps {
  node: FeaturedItemProps;
}

interface OtherProps {
  node: OtherItemProps;
}

const Work = ({ data }: Props) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <WorkWrapper variants={fadeUpIn}>
        <FeaturedWrapper variants={fadeUpInWithChildren}>
          <WrapperHeading variants={fadeUpInWithChildren}>
            Featured Projects
          </WrapperHeading>
          {data.featured.edges.map((item: FeaturedProps) => (
            <FeaturedItem key={item.node.id} item={item.node} />
          ))}
        </FeaturedWrapper>
        <OtherWrapper>
          <WrapperHeading>Other Projects</WrapperHeading>
          {data.other.edges.map((item: OtherProps) => (
            <OtherProjectWrapper key={item.node.id}>
              <a href={item.node.behanceUrl} target='_blank' rel='noreferrer'>
                <img src={item.node.thumbImg} alt='' />
              </a>
            </OtherProjectWrapper>
          ))}
        </OtherWrapper>
      </WorkWrapper>
      <Footer />
    </motion.div>
  );
};

export const query = graphql`
  query {
    featured: allFeaturedPortfolioJson {
      edges {
        node {
          id
          title
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

export default Work;
