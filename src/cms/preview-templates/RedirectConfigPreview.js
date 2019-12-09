import React from 'react'
import PropTypes from 'prop-types'
import StyleInjector from '../../components/StyleInjector'

const RedirectPreview = ({ entry }) => {
  const list = entry.getIn(['data', 'list'])
  const redirects = list ? list.toJS() : []

  return (
    <StyleInjector>
      <h3>Redirects must start with a forward slash "/"</h3>
      {redirects.map(redirect =>
        <dl style={{padding: 16, borderRadius: 9, backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
          <dt>Source</dt>
          <dd>
            <a href={redirect.source} target="_blank" rel="noopener noreferrer">
              {redirect.source}
            </a>
          </dd>
          <dt>Destination</dt>
          <dd>
            <a href={redirect.destination} target="_blank" rel="noopener noreferrer">
              {redirect.destination}
            </a>
          </dd>
        </dl>
      )}
    </StyleInjector>
  )
}

RedirectPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default RedirectPreview
