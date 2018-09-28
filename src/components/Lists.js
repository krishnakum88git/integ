import React from 'react'
import styled from 'styled-components'
import { spaceSizes } from '../styles/typography'
import { black } from '../styles/colors'

import List from './List'

const Lists = styled.div`
  margin-top: 41px;
  margin-left: ${spaceSizes.xxl};
  width: 300px;
  flex-shrink: 0;
  box-sizing: border-box;
`

export default ({items = []}) => items && items.length ? (
  <Lists>
    {items.map(item =>
      <List key="item.title" {...item} />
    )}
  </Lists>
) : null
