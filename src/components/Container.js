import styled, { css } from 'styled-components'

const containerSize = props => {
  switch (props.size) {
    case 'sm':
      return css`
        width: 600px;
      `
    case 'md':
      return css`
        width: 900px;
      `
    case 'lg':
    default:
      return css`
        width: 1200px;
      `
  }
}

const Container = styled.div`
  margin: 0 auto;  
  ${containerSize}
`

export default Container