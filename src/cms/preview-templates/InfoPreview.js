import React from 'react'
import PropTypes from 'prop-types'
import StyleInjector from '../../components/StyleInjector'
import { Wrapper } from '../../components/Layout'
import { PageTemplate } from '../../templates/generic-page'
import NavbarContact from '../../components/NavbarContact'

const InfoPreview = ({ entry }) => {
  const lists = entry.getIn(['data', 'lists'])
  const contactProps = {
    enrollmentContactNumber: entry.getIn(['data', 'enrollmentContactNumber']),
    abbreviatedHours: entry.getIn(['data', 'abbreviatedHours']),
    enrollNowURL: entry.getIn(['data', 'enrollNowURL']),
    position: 'static'
  }
  const showNavbar = contactProps.enrollmentContactNumber
    || contactProps.abbreviatedHours
    || contactProps.enrollNowURL

  return (
    <StyleInjector>
      <Wrapper>
        {showNavbar && <NavbarContact {...contactProps} />}
        <PageTemplate
          lists={lists && lists.toJS()}
          listDirection={entry.getIn(['data', 'listDirection'])}
        />
        <div style={{height: 200}} />
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
