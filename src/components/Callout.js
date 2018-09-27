import React from 'react';
import styled, { css } from "styled-components";
import { fontSizes, spacing } from "../styles/typography";
import colors from "../styles/colors";
import Container from './Container'

const calloutColors = props => {
  switch (props.type) {
    case 'secondary':
      return css`
        background-color: ${colors.link};
        color: white;

        a {
          color: white;
        }
      `
    default:
      break;
  }
}

const calloutAlignment = props => {
  switch (props.align) {
    case 'left':
      return css`
        text-align: left;
      `
    case 'center':
    default:
      return css`
        text-align: center;
      `
  }
}

const Callout = styled.div`
  padding: ${spacing[1]}px 0;
  font-size: ${fontSizes.sm};
  ${calloutColors}
  ${calloutAlignment}

  ul {
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin-bottom: 1em;

    &:before {
      display: inline-block;
      margin: 2px 12px;
      content: " ";
      width: 12px;
      height: 12px;
      background-color: ${colors.blacks[5]};
      border-radius: 50%;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Title = styled.h2`
  margin-top: 0;
`

export default ({ title, type, align = 'center', size = 'md', children }) => (
  <Callout type={type} align={align} size={size}>
    <Container size={size}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  </Callout>
)