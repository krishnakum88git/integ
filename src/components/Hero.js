import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img, { objectFitShim } from "./Image";

import { fontSizes, textShadow } from "../styles/typography";
import DividerCurve from "./DividerCurve";

const Hero = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
`

const imgStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0
}

const Image = ({image, src, alt}) => image ? (
  <Img style={imgStyle} fluid={image} />
) : (
  <img src={src} alt={alt} style={{
    ...imgStyle,
    ...objectFitShim()
  }} />
)

const IconBase = styled(FontAwesomeIcon)`
  box-sizing: content-box;
  padding: 32px;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  height: 48px;
`;

const IconContainer = styled.div`
  position: absolute;  
  background-color: #fff;
  border-radius: 50%;
  bottom: -38px;
  left: calc(50% - 56px);
  z-index: 9;
`

const Icon = props => (
  <IconContainer>
    <IconBase {...props} />
  </IconContainer>
)

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
  padding: ${props => props.isCentered ? '150px 20%' : '175px 50%  175px 32px' };
  width: 1200px;
  z-index: 2;
`

const Title = styled.h1`
  color: #ffffff;
  text-shadow: ${textShadow};
  margin: 0;
  text-align: ${props => (props.isCentered ? "center" : "left")};
`;

const Subtitle = styled.p`
  font-size: ${fontSizes.sm};
  color: #ffffff;
  text-shadow: ${textShadow};
  margin: 10px 0 0 0;
  text-align: ${props => (props.isCentered ? "center" : "left")};
`;

const Footer = styled.div`
  width: 100%;
  height: 93px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`

const DividerContainer = styled.div`
  transform: translateY(2px);
  -ms-transform: translateY(20px);
  width: 100%;
`

const Divider = () => (
  <DividerContainer>
    <DividerCurve />
  </DividerContainer>
)

export default ({ browserWidth, iconColor, iconName, image, imgSrc, title, subTitle, alignLeft = false }) => (
  <Hero>
    <Image aria-hidden="true" browserWidth={browserWidth} image={image} src={imgSrc} />
    <GradientOverlay aria-hidden="true" isLeftToRight={alignLeft} />
    <Container isCentered={!alignLeft}>
      <Title isCentered={!alignLeft}>{title}</Title>
      <Subtitle isCentered={!alignLeft}>{subTitle}</Subtitle>
    </Container>
    <Footer>
      <Divider />
      <Icon style={{ color: iconColor }} icon={iconName} />
    </Footer>
  </Hero>
);
