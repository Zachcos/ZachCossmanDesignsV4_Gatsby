import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors, font, aniVariants, breakpoints } from '../imports/variables';
import Footer from '../components/footer';
import aboutImg from '../../static/images/ZachC181.jpg';

const AboutWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const SectionWrapper = styled(motion.div)`
  display: flex;
  margin: 200px 0;
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  &:first-child {
    margin-top: 270px;
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    margin: 100px 0;
    &:first-child {
      margin: 150px 0;
    }
  }
`;

const TitleWrapper = styled(motion.div)`
  color: ${colors.accent};
  font-family: 'Oswald';
  font-size: ${font.h2};
  line-height: 1.2em;
  margin-right: 110px;
  position: relative;
  text-transform: uppercase;
  width: 30%;
  @media screen and (max-width: ${breakpoints.tablet}) {
    line-height: 1.5em;
    margin-bottom: 80px;
    width: 80%;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    font-size: ${font.h3};
    margin-bottom: 60px;
    width: 100%;
  }
`;

const CopyWrapper = styled(motion.div)`
  font-size: ${font.base};
  line-height: 2rem;
  position: relative;
  width: 65%;
  &.process {
    display: flex;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      margin-bottom: 60px;
      width: 37%;
      &.mr {
        margin-right: 100px;
      }
      &.grow {
        flex-grow: 2;
      }
      .subheading {
        color: ${colors.lightGrey};
        font-family: 'Oswald', sans-serif;
        font-size: ${font.h4};
        margin-bottom: 15px;
        text-transform: uppercase;
      }
    }
  }
  &.statement {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2.4rem;
  }
  @media screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    &.process {
      .item {
        width: 100%;
        &.mr {
          margin-right: 0;
        }
      }
    }
    &.statement {
      font-size: ${font.base};
    }
  }
`;

export default function About() {
  return (
    <AboutWrapper
      variants={aniVariants.parent}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <SectionWrapper
        variants={aniVariants.parent}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <TitleWrapper variants={aniVariants.child}>
          Quick and clean designs for over a decade
        </TitleWrapper>
        <CopyWrapper variants={aniVariants.child}>
          I began my interest in design when I was in my early teens. My cousin
          and I used to find Photoshop tutorials that we liked and would sit on
          the phone for hours while we completed them. (We compared our
          results by sending them through AOL Instant Messenger... ✌🏻👴🏻✌🏻) From
          there, I dabbled in (terrible) Flash animations and eventually found
          my footing tinkering with late-90's web builders like Yahoo!
          GeoCities, where the restrictions of that platform made me want to
          learn how to write my own code.
          <br />
          <br />
          My first sites were Photoshop designs cut into pieces and reassembled
          for the web with code from Adobe Dreamweaver. Just as I was publishing
          my first site, I got my first dose of just how quickly things change
          in the world of web design and development and began the never-ending
          journey of learning the new tools of the trade. Through table layouts,
          floats, and the rest, I have stayed on a constant hunt for the
          technologies that make sites faster and more versatile, with a
          majority of my current work being built on React with GatsbyJS for
          static-site generation.
          <br />
          <br />
          Since the mid 2000's I have been working on a freelance basis with a
          variety of clients, helping them establish brand identities and better
          reach their audiences.
          <br />
          <br />
          When I'm not behind the computer, you can find me acting on stage or
          playing music, or looking for the nearest Starbucks. ☕️
        </CopyWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <TitleWrapper>My Process</TitleWrapper>
        <CopyWrapper className="process">
          <div className="item mr">
            <div className="subheading">Design</div>
            From the initial consultation, I work with my clients to fine-tune
            the experience to it's cleanest, simplest form.
          </div>
          <div className="item">
            <div className="subheading">Branding</div>I strive to create
            experiences with colors and typography that represent the
            personality and values of my clients.
          </div>
          <div className="item mr">
            <div className="subheading">Web</div>I build-out the experience from
            the design to look great on a variety of full-sized screens.
          </div>
          <div className="item">
            <div className="subheading">Mobile</div>
            In today's multi-device world, experiences are distilled down to
            ensure content is delivered quickly and clearly.
          </div>
          <div className="item grow">
            <div className="subheading">Continuing Support</div>
            Whether it's making design tweaks or implementing new features, I
            continue to stay in contact with my clients to make sure their site
            is an experience that represents them and their values.
          </div>
        </CopyWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <TitleWrapper />
        <CopyWrapper className="statement">
          My goal is to create designs that are unique, but simple and
          straightforward. I use minimalism with an emphasis on typography and
          functional design to bring the best possible experience to the end
          user.
        </CopyWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <img src={aboutImg} alt="" />
      </SectionWrapper>
      <Footer />
    </AboutWrapper>
  );
}
