import React from "react";
import styled from "styled-components";
import { font } from "../styles/typography";

const Button = styled.button`
  ${font} height: 64px;
  width: 100%;
  background-color: ${props => (props.isPrimary ? "#006EF5" : "#D1D8DF")};
  border: none;
  border-radius: 32px;
  color: ${props => (props.isPrimary ? "#ffffff" : "#495969")};
  display: block;
  font-size: 16px;
  cursor: pointer;
`;

export default ({ children, isPrimary, onClick, ...rest }) => (
  <Button onClick={onClick} isPrimary={isPrimary} {...rest}>
    {children}
  </Button>
);
