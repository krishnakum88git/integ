import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";
import DividerCurve from './DividerCurve'

import { font } from "../styles/typography";

const Hero = styled.div`
  display: flex;
  margin-bottom: 28px;
  position: relative;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`

const Image = ({browserWidth, image}) => image ? (
  <Img
    style={{
      width: browserWidth,
      height: '100%',
      position: "absolute",
      top: 0,
      zIndex: -1
    }}
    fluid={image} />
) : null

const Icon = styled(FontAwesomeIcon)`
  position: absolute;  
  padding: 32px;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  height: 48px;
  background-color: #fff;
  border-radius: 50%;
  bottom: -28px;
`;

const GradientOverlay = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    ${props => (props.isLeftToRight ? 'to right' : 'to top')},
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

const Container = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${props => props.isCentered ? '175px 20%' : '175px 50%  175px 0%' };
  width: 1200px;
  z-index: 2;
`

const Title = styled.h1`
  ${font} font-size: 64px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 0;
  line-height: 64px;
  text-align: ${props => (props.isCentered ? "center" : "left")};
`;

const Subtitle = styled.h2`
  ${font} font-size: 22px;
  color: #ffffff;
  text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  font-weight: normal;
  margin: 10px 0 0 0;
  text-align: ${props => (props.isCentered ? "center" : "left")};
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

export default ({ browserWidth, iconColor, iconName, image, title, subTitle, isLarge = true }) => (
  <Hero>
    <Image browserWidth={browserWidth} image={image} />
    <GradientOverlay isLeftToRight={isLarge} />
    <Container isCentered={!isLarge}>
      <Title isCentered={!isLarge}>{title}</Title>
      <Subtitle isCentered={!isLarge}>{subTitle}</Subtitle>
    </Container>
    <Footer>
      <DividerCurve />
      <Icon style={{ color: iconColor }} icon={iconName} />
    </Footer>
  </Hero>
);
