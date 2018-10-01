import { css } from 'styled-components'
import colors from './colors'

export const font = css`font-family: 'Open Sans', sans-serif;`;
export const sizes = [64, 45, 32, 22, 16];
export const spacing = [128, 96, 64, 48, 32, 16, 8];

export const fontSizes = {
  xs: `${sizes[4]}px`,
  sm: `${sizes[3]}px`,
  md: `${sizes[2]}px`,
  lg: `${sizes[1]}px`,
  xl: `${sizes[0]}px`
}

export const spaceSizes = {
  xs: `${spacing[6]}px`,
  sm: `${spacing[5]}px`,
  md: `${spacing[4]}px`,
  lg: `${spacing[3]}px`,
  xl: `${spacing[2]}px`,
  xxl: `${spacing[1]}px`,
  xxxl: `${spacing[0]}px`
}

export const textShadow = '0px 2px 5px rgba(0, 0, 0, 0.75)'

export const headings = css`
  h1, h2, h3, h4, h5 {
    margin: 1.5em 0 0.25em;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  h1 {
    font-size: ${fontSizes.xl};
  }

  h2 {
    font-size: ${fontSizes.lg};
    line-height: 1.2;
  }

  h3 {
    font-size: ${fontSizes.md};
    line-height: 1.2;
  }

  h4 {
    font-size: ${fontSizes.sm};
    letter-spacing: 0;
    line-height: 1.2;
  }

  h5 {
    font-size: ${fontSizes.xs};
    letter-spacing: 0;
    line-height: 1.2;
  }
`;

export const links = css`
  a {
    color: ${colors.link};
    font-weight: 700;
    text-decoration: none;

    &:active,
    &:visited,
    &:hover,
    &:focus {
      color: ${colors.link};
      text-decoration: none;
    }
  }
`

export const paragraphs = css`
  p {
    line-height: 1.75;
  }
`

export const lists = css`
  ul {
    margin-bottom: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    position: relative;
    margin-bottom: 0.55em;
    padding-left: 2.2em;
    line-height: 1.75;
    text-align: left;

    p {
      margin-top: 0;
    }

    &:before {
      position: absolute;
      top: 0.55em;
      left: 0.55em;
      content: " ";
      width: .55em;
      height: .55em;
      background-color: ${colors.black.lighter};
      border-radius: 50%;
      flex-shrink: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`
