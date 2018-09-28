import React, { Component } from "react";
import { Link as GatsbyLink } from "gatsby";

const ExternalLink = ({ children, to }) => (
  <a href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

class Link extends Component {
  render() {
    const LinkComponent = this.props.to[0] === "/" ? GatsbyLink : ExternalLink;
    return (
      <LinkComponent {...this.props}>
        {this.props.title || this.props.children}
      </LinkComponent>
    );
  }
}

export default Link;
