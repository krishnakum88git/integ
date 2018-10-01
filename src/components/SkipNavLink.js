import React from "react";
import styled from "styled-components";

const SkipLink = styled.a`
  position: absolute;
  top: -1000px;
  left: -1000px;
  height: 1px;
  width: 1px;
  text-align: left;
  overflow: hidden;
  z-index: 999;

  &:focus,
  &:hover,
  &:active {
    left: 0;
    top: 0;
    width: auto;
    height: auto;
    overflow: visible;
  }
`;

export default () => <SkipLink href="#content">Skip To Content</SkipLink>;
