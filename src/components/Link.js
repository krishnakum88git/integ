import React, { Component } from "react";
import { Link as GatsbyLink } from "gatsby";

const ExternalLink = ({ children, to, ...props }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

class Link extends Component {
  render() {
    const to = this.props.to.replace("../../static", "");

    const LinkComponent =
      to[0] === "/" && to.indexOf("/files/") === -1 ? GatsbyLink : ExternalLink;
    return (
      <LinkComponent {...this.props} to={to}>
        {this.props.title || this.props.children}
      </LinkComponent>
    );
  }
}

export default Link;
