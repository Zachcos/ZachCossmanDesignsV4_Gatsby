import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, breakpoints } from '../imports/variables';
import { stagger, fadeUpIn, fadeUpInWithChildren } from '../imports/animations';
import Footer from '../components/footer';
import { Arrow } from '../components/icons';

const DetailsContainer = styled(motion.div)`
  display: flex;
  margin: 270px 0 100px 0;
  position: relative;
  width: 100%;
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 110px;
    position: relative;
    .title {
      color: ${colors.accent};
      font-family: 'Oswald', sans-serif;
      font-size: ${font.h3};
      font-weight: 400;
      margin-bottom: 40px;
      position: relative;
      text-transform: uppercase;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      position: relative;
      &-label {
        color: ${colors.lightGrey};
        font-size: 0.8rem;
        font-weight: 300;
        letter-spacing: 1px;
        margin-bottom: 10px;
        opacity: 0.7;
        text-transform: uppercase;
      }
      &-info {
        font-size: ${font.h5};
        a {
          color: ${colors.lightGrey};
          position: relative;
          text-decoration: none;
          &:after {
            background: ${colors.accent};
            bottom: -12px;
            content: '';
            height: 3px;
            left: 0;
            opacity: 0;
            position: absolute;
            transition: 0.2s ease-out;
            width: 100%;
          }
          &:hover:after {
            bottom: -7px;
            opacity: 1;
          }
        }
      }
    }
  }
  .description {
    p {
      line-height: 2rem;
      margin-bottom: 2.5rem;
      position: relative;
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .info {
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 75px;
      width: 100%;
      .title {
        font-size: ${font.h2};
        margin-bottom: 50px;
        width: 100%;
      }
    }
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin: 160px 0 100px 0;
    .info {
      margin-bottom: 50px;
      .title {
        font-size: ${font.h4};
      }
      .field {
        width: 100%;
        &-label {
          font-size: 0.7rem;
        }
        &-info {
          font-size: ${font.base};
        }
      }
    }
  }
`;

const AssetContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  img {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const NextProjectContainer = styled(motion.div)`
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  display: flex;
  height: 100px;
  justify-content: flex-end;
  margin-bottom: 120px;
  padding-bottom: 60px;
  .next-details {
    display: flex;
    flex-direction: column;
    text-align: right;
    .label {
      color: ${colors.lightGrey};
      font-size: 0.7rem;
      font-weight: 300;
      letter-spacing: 1px;
      margin-bottom: 20px;
      opacity: 0.7;
      text-transform: uppercase;
    }
    .project-name {
      font-size: ${font.h5};
      position: relative;
      a {
        color: ${colors.lightGrey};
        padding-right: 50px;
        text-decoration: none;
        &:hover {
          svg {
            fill: ${colors.accent};
            right: 0;
          }
        }
      }
      svg {
        margin-left: 10px;
        position: absolute;
        right: 10px;
        transition: all 0.15s ease-out;
      }
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
      width: 50%;
    }
    @media screen and (max-width: ${breakpoints.phone}) {
      width: 100%;
    }
  }
`;

interface Props {
  data: {
    featuredPortfolioJson: {
      slug: string;
      title: string;
      description: string[];
      liveUrl: string;
      nextProj: {
        title: string;
        slug: string;
      };
      assets: string[];
    };
  };
}

const PortfolioDetail = ({ data }: Props) => {
  const { title, description, liveUrl, nextProj, assets } =
    data.featuredPortfolioJson;
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={stagger}
    >
      <DetailsContainer
        variants={stagger}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.div variants={fadeUpInWithChildren} className='info'>
          <motion.h2 variants={fadeUpIn} className='title'>
            {title}
          </motion.h2>
          <motion.div variants={fadeUpInWithChildren} className='field'>
            <motion.span className='field-label' variants={fadeUpIn}>
              liveUrl
            </motion.span>
            <motion.span className='field-info' variants={fadeUpIn}>
              <a href={liveUrl} target='_blank' rel='noreferrer'>
                {liveUrl}
              </a>
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div variants={fadeUpInWithChildren} className='description'>
          {description.map((para: string) => (
            <motion.p variants={fadeUpIn}>{para}</motion.p>
          ))}
        </motion.div>
      </DetailsContainer>
      <AssetContainer variants={fadeUpIn}>
        {assets.map((asset: string) => (
          <img src={asset} alt='' />
        ))}
      </AssetContainer>
      <NextProjectContainer variants={fadeUpIn}>
        <div className='next-details'>
          <div className='label'>Next Project</div>
          <div className='project-name'>
            <Link to={`..${nextProj.slug}`}>
              {nextProj.title} <Arrow />
            </Link>
          </div>
        </div>
      </NextProjectContainer>
      <Footer />
    </motion.div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    featuredPortfolioJson(slug: { eq: $slug }) {
      slug
      title
      description
      liveUrl
      nextProj {
        title
        slug
      }
      assets
    }
  }
`;

export default PortfolioDetail;
