import { css } from 'styled-components'

export const font = css`font-family: 'Open Sans', sans-serif;`;
export const fontSizes = [64, 45, 32, 22, 16];
export const spacing = [48, 32, 16, 8];

export const headings = css`
  h1, h2, h3, h4, h5 {
    font-weight: 800;
    color: #333333;
    letter-spacing: -0.025em;
    line-height: 1;
  }

  h1 {
    font-size: ${fontSizes[0]}px;
  }

  h2 {
    font-size: ${fontSizes[1]}px;
  }

  h3 {
    font-size: ${fontSizes[2]}px;
  }

  h4 {
    font-size: ${fontSizes[3]}px;
  }

  h5 {
    font-size: ${fontSizes[4]}px;
  }
`;