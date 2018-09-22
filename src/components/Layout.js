import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from "styled-components"

import Navbar from '../components/Navbar'
import Footer from "../components/Footer"

const Wrapper = styled.div``;

injectGlobal`
  body, html {
    margin: 0;
  }
`

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </Wrapper>
)

export default TemplateWrapper
