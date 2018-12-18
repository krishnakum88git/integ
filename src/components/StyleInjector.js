import React, { Fragment } from 'react'
import { StyleSheetManager } from 'styled-components'
import GlobalStyles from '../styles/global'

const StyleInjector = ({ children }) => {
  const iframe = document.getElementsByTagName('iframe')[0]
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Fragment>
        {children}
        <GlobalStyles />
      </Fragment>
    </StyleSheetManager>
  )
}

export default StyleInjector
