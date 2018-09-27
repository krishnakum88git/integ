import styled, { css } from 'styled-components'
import { spaceSizes } from '../styles/typography'

const SpacerSize = props => {
  switch (props.size) {
    case 'xs':
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
    case 'xxl':
    case 'xxxl':
      return spaceSizes[props.size]
    default:
      return 0
  }
}

const Spacer = styled.span`
  display: inline-block;
  width: ${SpacerSize};
  height: ${SpacerSize};
`

export default Spacer