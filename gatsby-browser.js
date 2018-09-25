import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import * as svgIcons from "@fortawesome/free-solid-svg-icons";
import AppProvider from "./src/store/provider";

const icons = [
  "faBalanceScale",
  "faUserMd",
  "faUserFriends",
  "faPhone",
  "faHeart",
  "faFileMedicalAlt",
  "faQuestion",
  "faBookOpen",
  "faExclamationTriangle",
  "faUser",
  "faEnvelope",
  "faPhone",
  "faMapMarker"
];

export const onClientEntry = () =>
  icons.forEach(icon => library.add(svgIcons[icon]));

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
