import React, { Component } from "react";
import Helmet from "react-helmet";
import styled, { injectGlobal } from "styled-components";
import { debounce } from "lodash";

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
  }
`;

const GreyBar = styled.div`
  background-color: #d1d8df;
  height: 256px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

const MiddleSection = styled.section`
  position: relative;
  min-height: 524px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: typeof(document) !== "undefined" ? document.body.getBoundingClientRect().width : 1400
    };
  }
  componentDidMount() {
    window.addEventListener(
      "resize",
      debounce(this.handleResize, 100, { maxWait: 250 })
    );
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({
      browserWidth: document.body.getBoundingClientRect().width
    });
  };
  render() {
    return (
      <Wrapper>
        <Helmet title="Home | Gatsby + Netlify CMS"><html lang="en" /></Helmet>
        <Navbar />
        <Hero browserWidth={this.state.browserWidth} {...this.props.hero} />
        <MiddleSection>
          <div>{this.props.children}</div>
          {this.props.magnets && <Magnets magnets={this.props.magnets} />}
          <GreyBar />
        </MiddleSection>
        <Footer />
        <ExternalLinkWarningModal />
      </Wrapper>
    );
  }
}

export default TemplateWrapper;
