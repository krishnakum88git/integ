import React, { Fragment } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

import { font } from "../styles/typography";

const HeroSection = styled.section`
  position: relative;
  height: 636px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  height: 8000px;
  width: 8000px;
  border-radius: 8000px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled.div`
  background-color: #ffffff;
  height: 128px;
  width: 128px;
  border-radius: 128px;
  position: absolute;
  top: 658px;
  left: 50%;
  margin-left: -64px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    width: 48px;
    height: 64px;
  }
`;

const GradientOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) ${props => props.firstStop}px,
    rgba(0, 0, 0, 0) ${props => props.secondStop}px
  );
  z-index: 1;
`;

const HeroTitle = styled.h2`
  ${font} font-size: 64px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 0;
  line-height: 64px;
`;

const HeroSubtitle = styled.h3`
  ${font} font-size: 22px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 10px 0 0 0;
`;

const HeroCopy = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  z-index: 2;
  max-width: 480px;
  margin-left: -550px;
`;

export default ({ browserWidth, iconColor, iconName, image, title, subTitle }) => (
  <Fragment>
    <HeroSection>
      <HeroCopy>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>
          {subTitle}
        </HeroSubtitle>
      </HeroCopy>
      <HeroWrapper>
        <GradientOverlay
          firstStop={4000 - browserWidth / 2}
          secondStop={4000 + browserWidth / 2}
        />
        <Img style={{ width: browserWidth, height: 636 }} fluid={image} />
      </HeroWrapper>
    </HeroSection>
    <IconWrapper>
      <Icon style={{ color: iconColor }} icon={iconName} />
    </IconWrapper>
  </Fragment>
);
