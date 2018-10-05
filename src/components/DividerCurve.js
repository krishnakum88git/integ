import React from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
	display: block;
`

const FooterSVG = styled(SVG)`
	width: 100%;
`;

export default ({isFooter}) => isFooter ? (
	<FooterSVG version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="197.411" width="1280" viewBox="0 0 1280 197.411" enable-background="new 0 0 1280 197.411">
		<path fill="#00245D" d="M497.4,121.097C348.139,95.526,161.249,125.989-1,168.009v29.402h1281V12.474 C1035.278,192.204,808.606,174.41,497.4,121.097z"/>
	</FooterSVG>
) : (
  <SVG version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-123 0 300 21.875" enableBackground="new -123 0 300 21.875">
		<path fill="#FFFFFF" d="M160.388,4.015c-20.605,4.232-42.247,6.798-63.899,8.328C73.441,13.965,50.221,14.578,27,14.518
			c-23.218,0.06-46.438-0.553-69.485-2.175c-21.655-1.53-43.297-4.096-63.905-8.328C-107.72,3.749-123,1.015-123,0v21.875h300V0
			C177,1.015,161.723,3.749,160.388,4.015z"/>
	</SVG>
)