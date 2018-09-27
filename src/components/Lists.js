import React from 'react'
import styled from 'styled-components'
import { spaceSizes } from '../styles/typography'
import { black } from '../styles/colors'

import List from './List'

const Lists = styled.div`
  margin-left: ${spaceSizes.xl};
  padding: ${spaceSizes.md};
  width: 300px;
  flex-shrink: 0;
  background-color: ${black.ultralight};
  border-radius: ${spaceSizes.sm};
  box-sizing: border-box;
`

export default ({items = []}) => items && items.length ? (
  <Lists>
    {items.map(item =>
      <List key="item.title" {...item} />
    )}
  </Lists>
) : null
