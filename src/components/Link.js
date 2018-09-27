import React, { Component } from "react";
import { Link as GatsbyLink } from "gatsby";
import { Consumer } from "../store/createContext";

class ExternalLink extends Component {
  handleClick = cb => e => {
    e.preventDefault();
    cb(this.props.to);
  };
  render() {
    return (
      <Consumer>
        {({ openExternalLinkModal }) => {
          return (
            <a
              onClick={this.handleClick(openExternalLinkModal)}
              href={this.props.to}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}

class Link extends Component {
  render() {
    const LinkComponent = this.props.to[0] === "/" ? GatsbyLink : ExternalLink;
    return <LinkComponent {...this.props}>{this.props.title || this.props.children}</LinkComponent>;
  }
}

export default Link;
