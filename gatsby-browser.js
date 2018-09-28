import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as svgIcons from "@fortawesome/free-solid-svg-icons";
import AppProvider from "./src/store/provider";
import { Consumer } from "./src/store/createContext";

const icons = [
  "faBalanceScale",
  "faUserMd",
  "faUserFriends",
  "faPhone",
  "faHeart",
  "faFileMedicalAlt",
  "faFileAlt",
  "faQuestion",
  "faBookOpen",
  "faExclamationTriangle",
  "faUser",
  "faEnvelope",
  "faPhone",
  "faMapMarker",
  "faLink",
  "faCircle",
  "faDotCircle",
  "faClock",
  "faCalendar",
  "faFax",
  "faFileDownload",
  "faInfo",
  "faInfoCircle",
  "faCheck"
];

export const onClientEntry = () =>
  icons.forEach(icon => library.add(svgIcons[icon]));

class ExternalLinkCatcher extends Component {
  componentDidMount() {
    const handleClick = ev => {
      var e = window.e || ev;

      if (e.target.tagName !== "A") return;
      if (!e.target.getAttribute("href").startsWith("http")) return;
      e.preventDefault();
      e.stopPropagation();
      this.props.onExternalLinkClick(e.target.href);
    };
    document.addEventListener("click", handleClick, false);
  }
  render() {
    return this.props.children;
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <AppProvider>
      <Consumer>
        {cntx => (
          <ExternalLinkCatcher onExternalLinkClick={cntx.openExternalLinkModal}>
            {element}
          </ExternalLinkCatcher>
        )}
      </Consumer>
    </AppProvider>
  );
};
