import React, { Component } from 'react';
import { Provider } from './createContext';

class AppProvider extends Component {
  state = {
    isExternalLinkModalOpen: false,
    externalLinkURL: "",
    openExternalLinkModal: externalLinkURL => this.setState({ isExternalLinkModalOpen: true, externalLinkURL }),
    closeExternalLinkModal: _ => this.setState({ isExternalLinkModalOpen: false, externalLinkURL: "" }),
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default AppProvider;