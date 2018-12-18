import React, { Fragment } from 'react'
// import { StyleSheetManager, ThemeProvider } from 'styled-components'
import { StyleSheetManager } from 'styled-components'
// import { TypographyStyle, GoogleFont } from 'react-typography'
import GlobalStyles from '../styles/global'
// import typography from '../styles/typography'
// import theme from '../styles/theme'

const StyleInjector = ({ children }) => {
  const iframe = document.getElementsByTagName('iframe')[0]
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
        {/* <ThemeProvider theme={theme}> */}
          <Fragment>
            <GlobalStyles />
            {/* <TypographyStyle typography={typography} /> */}
            {/* <GoogleFont typography={typography} /> */}
            {children}
          </Fragment>
        {/* </ThemeProvider> */}
    </StyleSheetManager>
  )
}

export default StyleInjector
