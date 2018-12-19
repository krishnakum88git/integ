import React from "react";
import styled, { css } from "styled-components";
import { fontSizes, spaceSizes } from "../styles/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from './Link';
import colors from '../styles/colors';

const buttonStyles = css`
  padding: ${spaceSizes.sm} ${spaceSizes.md};
  background-color: ${props => (props.isPrimary ? colors.blue : "#D1D8DF")};
  border: none;
  border-radius: 32px;
  color: ${props => (props.isPrimary ? "#ffffff" : "#495969")};
  font-size: ${fontSizes.sm};
  font-weight: bold;
  display: block;
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:active,
    &:visited,
    &:hover,
    &:focus {
      color: ${props => (props.isPrimary ? "#ffffff" : "#495969")};
    }
`

const ButtonStyled = styled.button`
  ${buttonStyles}
`;

const ButtonLinkStyled =  styled(Link)`
  ${buttonStyles}
  display: inline-block;
`

const Button = ({url, ...props}) => props.to || url ? (
  <ButtonLinkStyled to={url} {...props} />
) : (
  <ButtonStyled {...props} />
)

const IconStyled = styled(FontAwesomeIcon)`
  margin-right: ${spaceSizes.sm};
  width: 1.125em;
  height: 1em;
`

const Icon = props => props.icon ? (
  <IconStyled {...props} />
) : null

export default ({ children, text, icon, ...buttonProps }) => (
  <Button {...buttonProps}>
    <Icon icon={icon} />
    {children}
    {text}
  </Button>
);
