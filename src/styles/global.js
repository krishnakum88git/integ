import { createGlobalStyle } from 'styled-components'
import { font, headings, links, paragraphs, spaceSizes } from '../styles/typography'
import { black } from '../styles/colors'
import reboot from '../styles/bootstrap-reboot'

const GlobalStyles = createGlobalStyle`
  ${reboot}

  body, html {
    margin: 0;
    background-color: #fafafa;
    color: ${black.darkest};
    ${font}
  }

  hr {
    margin: ${spaceSizes.lg} ${spaceSizes.md};
    border: 2px solid ${black.lightest};
    border-radius: 4px;
  }

  ${headings}
  ${links}
  ${paragraphs}
`

export default GlobalStyles