import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import { font, headings, links } from '../styles/typography'
import { blacks } from '../styles/colors'
import favicon from '../img/favicon.ico'

import Navbar from "./Navbar";
import Footer from "./Footer";
import Magnets from "./Magnets";
import Hero from "./Hero";
import ExternalLinkWarningModal from './ExternalLinkWarningModal';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
`;

injectGlobal`
  body, html {
    margin: 0;
    background-color: #fafafa;
    color: ${blacks[0]};
    ${font}
  }

  ${headings}
  ${links}
`;

class TemplateWrapper extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title="Integra Managed Care"><html lang="en" />
          <link rel="icon" href={favicon} />
          {/* General tags */}
          {/* <meta name="image" content={shareImage} />
          <meta name="description" content={description} /> */}
          {/* OpenGraph tags */}
          {/* <meta property="og:title" content={title} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={title} />
          <meta property="og:image" content={shareImage} />
          <meta property="og:image:width" content={shareImageWidth} />
          <meta property="og:image:height" content={shareImageHeight} />
          <meta property="og:description" content={description} /> */}
          {/* Twitter Card tags */}
          {/* <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={twitter} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:image" content={shareImage} />
          <meta name="twitter:description" content={description} /> */}
        </Helmet>
        <Navbar />
        <Hero {...this.props.hero} />
        {this.props.children}
        {this.props.magnets && <Magnets magnets={this.props.magnets} />}
        <Footer />
        <ExternalLinkWarningModal />
      </Wrapper>
    );
  }
}

export default TemplateWrapper;
