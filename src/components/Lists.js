import React from 'react'
import styled from 'styled-components'
import { spaceSizes } from '../styles/typography'

import List from './List'

const getMargin = props => props.direction === 'column'
  ? `59px 0 0 ${spaceSizes.xxl}`
  : 0 

const Lists = styled.div`
  display: flex;
  margin: ${getMargin};
  width: ${props => props.direction === 'column' ? '300px' : '100%' };
  flex-shrink: 0;
  box-sizing: border-box;
  justify-content: ${props => props.direction === 'column' ? 'flex-start' : 'space-around' };
  flex-direction: ${props => props.direction};
  flex-wrap: wrap;

  @media (max-width: 800px) {
    margin: 0;
    padding-top: 16px;
    width: 100%;
    flex-direction: column;
  }

  .list {
    margin-bottom: ${props => props.direction === 'column' ? 0 : spaceSizes.md };
    flex: 0 0 ${props => props.direction === 'column' ? 'auto' : '40%' };

    @media (max-width: 800px) {
      margin: 0;
      padding-top: 16px;
      width: 100%;
    }
  }
`

export default ({items = [], direction}) => items && items.length ? (
  <Lists direction={direction || 'column'}>
    {items.map(item =>
      <List key={item.title} {...item} />
    )}
  </Lists>
) : null
