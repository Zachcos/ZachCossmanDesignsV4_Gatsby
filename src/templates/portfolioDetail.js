import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { colors, font } from '../imports/variables';
import Footer from '../components/footer';

const DetailsContainer = styled.div`
  display: flex;
  margin: 270px 0 100px 0;
  width: 100%;
  .info {
    display: flex;
    flex-direction: column;
    margin-right: 110px;
    width: 40%;
    .title {
      color: ${colors.accent};
      font-family: 'Oswald', sans-serif;
      font-size: ${font.h3};
      font-weight: 400;
      margin-bottom: 40px;
      text-transform: uppercase;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      &-label {
        color: ${colors.lightGrey};
        font-family: 'Oswald', sans-serif;
        font-size: 0.8rem;
        font-weight: 200;
        letter-spacing: 2px;
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
    }
  }
`;

const AssetContainer = styled.div`
  width: 100%;
  img {
    margin-bottom: 50px;
    width: 100%;
  }
`;

export default function PortfolioDetail({ data }) {
  const item = data.featuredPortfolioJson;
  return (
    <>
      <DetailsContainer>
        <div className="info">
          <h2 className="title">{item.title}</h2>
          <div className="field">
            <span className="field-label">service</span>
            <span className="field-info">{item.service}</span>
          </div>
          <div className="field">
            <span className="field-label">liveUrl</span>
            <span className="field-info">
              <a href={item.liveUrl} target="_blank" rel="noreferrer">
                {item.liveUrl}
              </a>
            </span>
          </div>
        </div>
        <div className="description">
          {item.description.map((para) => (
            <p>{para}</p>
          ))}
        </div>
      </DetailsContainer>
      <AssetContainer>
        {item.assets.map((asset) => (
          <img src={asset} alt="" />
        ))}
      </AssetContainer>
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
