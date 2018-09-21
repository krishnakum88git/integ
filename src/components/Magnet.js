import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  position: relative;
`;
const Dot = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  background-color: #ffffff;
  position: relative;
  ::before {
    content: ' ';
    left: 50%;
    top: 50%;
    margin: -8px 0 0 -8px;
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 16px;
    background-color: ${props => props.color || "#000000"}
  }
`;

const Magnet = ({ banner, slug, indicatorColor, iconName, title }) => (
  <Link to={`/${slug}`}>
    <Wrapper>
      <Img fixed={banner.childImageSharp.fixed} />
      <h3>{title}</h3>
      <Dot color={indicatorColor} />
      <FontAwesomeIcon style={{color: "rgba(255,255,255,0.9)"}} icon={iconName} />
    </Wrapper>
  </Link>
);

export default Magnet;
