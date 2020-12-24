import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, aniVariants } from '../imports/variables';
import Footer from '../components/footer';

const DetailsContainer = styled(motion.div)`
  display: flex;
  margin: 270px 0 100px 0;
  width: 100%;
  position: relative;
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 110px;
    width: 40%;
    position: relative;
    .title {
      color: ${colors.accent};
      font-family: 'Oswald', sans-serif;
      font-size: ${font.h3};
      font-weight: 400;
      margin-bottom: 40px;
      text-transform: uppercase;
      position: relative;
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
            transition: 0.3s ease-out;
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
`;

const AssetContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  img {
    margin-bottom: 50px;
    width: 100%;
  }
`;

const NextProjectContainer = styled.div`
  margin-bottom: 120px;
  padding-bottom: 60px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  .next-details {
    display: flex;
    flex-direction: column;
    text-align: right;
    .label {
      font-size: 0.7rem;
      font-weight: 300;
      color: ${colors.lightGrey};
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 20px;
      opacity: 0.7;
    }
    .project-name {
      font-size: ${font.h5};
      position: relative;
      a {
        padding-right: 50px;
        text-decoration: none;
        color: ${colors.lightGrey};
        &:hover {
          i {
            right: 0;
            color: ${colors.accent};
          }
        }
      }
      i {
        position: absolute;
        right: 10px;
        color: ${colors.lightGrey};
        margin-left: 10px;
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export default function PortfolioDetail({ data }) {
  const {
    title,
    description,
    service,
    liveUrl,
    nextProj,
    assets,
  } = data.featuredPortfolioJson;
  return (
    <>
      <DetailsContainer
        variants={aniVariants.parent}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={aniVariants.parent} className="info">
          <motion.h2 variants={aniVariants.child} className="title">
            {title}
          </motion.h2>
          <motion.div variants={aniVariants.child} className="field">
            <span className="field-label">service</span>
            <span className="field-info">{service}</span>
          </motion.div>
          <motion.div variants={aniVariants.child} className="field">
            <span className="field-label">liveUrl</span>
            <span className="field-info">
              <a href={liveUrl} target="_blank" rel="noreferrer">
                {liveUrl}
              </a>
            </span>
          </motion.div>
        </motion.div>
        <motion.div variants={aniVariants.parent} className="description">
          {description.map((para) => (
            <motion.p variants={aniVariants.child}>{para}</motion.p>
          ))}
        </motion.div>
      </DetailsContainer>
      <AssetContainer variants={aniVariants.child}>
        {assets.map((asset) => (
          <img src={asset} alt="" />
        ))}
      </AssetContainer>
      <NextProjectContainer>
        <div className="next-details">
          <div className="label">Next Project</div>
          <div className="project-name">
            <Link to={`..${nextProj.slug}`}>
              {nextProj.title} <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </NextProjectContainer>
      <Footer />
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    featuredPortfolioJson(slug: { eq: $slug }) {
      slug
      title
      description
      service
      liveUrl
      nextProj {
        title
        slug
      }
      assets
    }
  }
`;
