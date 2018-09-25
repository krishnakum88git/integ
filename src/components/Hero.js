import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

import { font } from "../styles/typography";

const HeroSection = styled.section`
  position: relative;
  height: ${props => (props.isLarge ? 636 : 436)}px;
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
  top: ${props => props.isLarge ? 658 : 458}px;
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

const leftToRightGradient = css`
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.5) ${props => props.firstStop}px,
    rgba(0, 0, 0, 0) ${props => props.secondStop}px
  );
`;

const topToBottomGradient = css`
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 7364px,
    rgba(0, 0, 0, 0.5) 8000px
  );
`;

const GradientOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  ${props => (props.isLeftToRight ? leftToRightGradient : topToBottomGradient)};
`;

const HeroTitle = styled.h2`
  ${font} font-size: 64px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 0;
  line-height: 64px;
  text-align: ${props => (props.isCentered ? "center" : "left")};
`;

const HeroSubtitle = styled.h3`
  ${font} font-size: 22px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 10px 0 0 0;
  text-align: ${props => (props.isCentered ? "center" : "left")};
  display: ${props => (props.isCentered ? "none" : "block")};
`;

const leftAlignedCopy = css`
  left: 50%;
  margin-left: -550px;
`;

const HeroCopy = styled.div`
  position: absolute;
  top: ${props => (props.isCentered ? 160 : 200)}px;
  z-index: 2;
  max-width: 480px;
  ${props => !props.isCentered && leftAlignedCopy}
`;

export default ({
  browserWidth,
  iconColor,
  iconName,
  image,
  title,
  subTitle,
  isLarge = true
}) => (
  <Fragment>
    <HeroSection isLarge={isLarge}>
      <HeroCopy isCentered={!isLarge}>
        <HeroTitle isCentered={!isLarge}>{title}</HeroTitle>
        <HeroSubtitle isCentered={!isLarge}>{subTitle}</HeroSubtitle>
      </HeroCopy>
      <HeroWrapper>
        <GradientOverlay
          isLeftToRight={isLarge}
          firstStop={4000 - browserWidth / 2}
          secondStop={4000 + browserWidth / 2}
        />
        {image && (
          <Img style={{ width: browserWidth, height: 636 }} fluid={image} />
        )}
      </HeroWrapper>
    </HeroSection>
    <IconWrapper isLarge={isLarge}>
      <Icon style={{ color: iconColor }} icon={iconName} />
    </IconWrapper>
  </Fragment>
);
