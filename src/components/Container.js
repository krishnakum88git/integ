import styled, { css } from 'styled-components'
import { spaceSizes } from '../styles/typography'

const containerSize = props => {
  switch (props.size) {
    case 'xs':
      return css`
        max-width: 400px;
      `
    case 'sm':
      return css`
        max-width: 600px;
      `
    case 'md':
      return css`
        max-width: 800px;

        @media (max-width: 800px) {
          padding: 32px;
        }
      `
    case 'lg':
      return css`
        max-width: 1000px;

        @media (max-width: 1000px) {
          padding: 32px;
        }
      `
    case 'xl':
    default:
      return css`
        width: 1200px;

        @media (max-width: 1200px) {
          width: 100%;
        }
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
  /* flex-wrap: wrap; */
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  ${containerSize}

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default Container
