import React from 'react';
import styled, { css } from "styled-components";
import { fontSizes, spaceSizes, lists } from "../styles/typography";
import colors from "../styles/colors";
import Container from './Container'
import Button from './Button'

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

const parseNewlines = text => typeof text === 'string' ? text.split("\\n").join("\n") : text

const Callout = styled.div`
  padding: ${spaceSizes.xxl} 0;
  font-size: ${fontSizes.sm};
  ${calloutColors}
  ${calloutAlignment}
  ${lists}
  }
`

const TitleStyled = styled.h2`
  margin-top: 0;
  white-space: pre-wrap;
`

const Title = ({ text }) => text ? (
  <TitleStyled>{parseNewlines(text)}</TitleStyled>
) : null

const ActionStyled = styled(Button)`
  margin: ${spaceSizes.lg} auto 0;
  white-space: pre-wrap;
`

const Action = ({ action }) => action ? (
  <ActionStyled isPrimary {...action} />
) : null

export default ({ title, type, align = 'center', size = 'md', action, body, children }) => (
  <Callout type={type} align={align} size={size}>
    <Container size={size} flex={true} flexDirection="column" alignItems="center">
      <Title text={title} />
      {children}
      {body}
      <Action action={action} />
    </Container>
  </Callout>
)