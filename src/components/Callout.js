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
        background-color: ${colors.blue};
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

  @media (max-width: 800px) { 
    padding: ${spaceSizes.lg} ${spaceSizes.md};
  }
`

const List = styled.ul`
  margin-top: 32px;
  min-width: 800px;

  @media (max-width: 800px) { 
    min-width: 100%;
  }
`

const TitleStyled = styled.h2`
  margin-top: 0;
  white-space: pre-wrap;
  max-width: 100%;
  font-size: ${fontSizes.lg};
`

const Title = ({ text }) => text ? (
  <TitleStyled>{parseNewlines(text)}</TitleStyled>
) : null

const ActionStyled = styled(Button)`
  margin: ${spaceSizes.lg} auto 0;
  white-space: pre-wrap;
`

const Action = ({ action, isPrimary = true }) => action ? (
  <ActionStyled isPrimary={isPrimary} {...action} />
) : null

export default ({ title, type, align = 'center', size = 'md', action, actionSecondary, body, points, children, flex = true }) => (
  <Callout type={type} align={align} size={size}>
    <Container size={size} flex={flex} flexDirection="column" alignItems="center">
      <Title text={title} />
      {children}
      {body && (
        <p style={{maxWidth: "100%"}}>{body}</p>
      )}
      {points && (
        <List>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </List>
      )}
      <Action action={action} />
      {actionSecondary && (
        <>
          <br />
          <Action action={actionSecondary} isPrimary={false} />
        </>
      )}
    </Container>
  </Callout>
)