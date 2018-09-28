import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lists } from '../styles/typography'

const ContentContainer = styled.div`
  ${lists}
`

export const HTMLContent = ({ content, className }) => (
  <ContentContainer className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <ContentContainer className={className}>{content}</ContentContainer>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
