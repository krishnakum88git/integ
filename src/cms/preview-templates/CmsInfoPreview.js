import React from 'react'
import PropTypes from 'prop-types'
import StyleInjector from '../../components/StyleInjector'
import { Wrapper } from '../../components/Layout'
import { PageTemplate } from '../../templates/generic-page'
import Footer from '../../components/Footer'

const InfoPreview = ({ entry }) => {
  return (
    <StyleInjector>
      <Wrapper>
        <PageTemplate />
        <Footer
          cmsMaterialID={entry.getIn(['data', 'cmsMaterialID'])}
          lastModified={entry.getIn(['data', 'lastModified'])}
        />
      </Wrapper>
    </StyleInjector>
  )
}

InfoPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default InfoPreview
