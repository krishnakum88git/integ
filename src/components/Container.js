import styled, { css } from 'styled-components'
import { spaceSizes } from '../styles/typography'

const containerSize = props => {
  switch (props.size) {
    case 'xs':
      return css`
        width: 400px;
      `
    case 'sm':
      return css`
        width: 600px;
      `
    case 'md':
      return css`
        width: 800px;
      `
    case 'lg':
      return css`
        width: 1000px;
      `
    case 'xl':
    default:
      return css`
        width: 1200px;
      `
  }
}

const Container = styled.div`
  display: ${props => props.flex ? 'flex' : 'block'};
  position: relative;
  margin: ${props => props.vmrg ? spaceSizes.lg : 0} auto;
  padding-top: ${props => props.pagePadTop ? spaceSizes.lg : 0};
  padding-bottom: ${props => props.pagePadBot ? spaceSizes.lg : 0};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  ${containerSize}
`

export default Container