import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image";

import { font } from "../styles/typography"

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 280px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 0px #a5b1c2;
  margin: -45px 15px 45px;
`;

const Dot = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: #ffffff;
  position: absolute;
  bottom: -17px;
  left: 50%;
  z-index: 1;
  margin-left: -16px;
  ::before {
    content: " ";
    left: 50%;
    top: 50%;
    margin: -8px 0 0 -8px;
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background-color: ${props => props.color || "#000000"};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  align-items: flex-end;
  justify-content: center;
`;

const ImageContainer = styled.div`
  height: 2000px;
  width: 2000px;
  border-radius: 2000px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-shrink: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    z-index: 1;
    height: 100px;
    width: 100px;
  }
`;

const Link = styled(GatsbyLink)`
  text-decoration: none;
`;

const Title = styled.h5`
  color: #777777;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  margin: 20px 0;
`;

const Magnet = ({ banner, slug, indicatorColor, iconName, title }) => (
  <Link to={`/${slug}`}>
    <Wrapper>
      <ImageWrapper>
        <Dot color={indicatorColor} />
        <Icon icon={iconName} />
        <ImageContainer>
          <Img style={{ height: 180 }} fixed={banner.childImageSharp.fixed} />
        </ImageContainer>
      </ImageWrapper>
      <Title>{title}</Title>
    </Wrapper>
  </Link>
);

export default Magnet;
