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

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};
