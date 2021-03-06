import React, { Component } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import favicon from '../img/favicon.ico'

import GlobalStyles from '../styles/global'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Magnets from "./Magnets";
import Hero from "./Hero";
import Breadcrumbs from "./Breadcrumbs";
import Callout from "./Callout";
import ExternalLinkWarningModal from './ExternalLinkWarningModal';
import SkipNavLink from "./SkipNavLink"

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  min-width: 1200px;
  background-color: #ffffff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
`;

class TemplateWrapper extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet title={`${this.props.title ? `${this.props.title} - ` : ''}Integra Managed Care`}>
          <html lang="en" />
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
        <SkipNavLink />
        <Navbar navContact={this.props.navContact} />
        <Hero {...this.props.hero} />
        {this.props.introduction && <Callout flex={false} {...this.props.introduction} />}
        {this.props.breadcrumbs && <Breadcrumbs items={this.props.breadcrumbs} />}
        {this.props.children}
        {this.props.magnets && <Magnets magnets={this.props.magnets} />}
        <Footer disclaimers={this.props.disclaimers} {...this.props.cmsInfo} />
        <ExternalLinkWarningModal />
        <GlobalStyles />
      </Wrapper>
    );
  }
}

export default TemplateWrapper;
