const svgCore = require("@fortawesome/fontawesome-svg-core");
const svgIcons = require("@fortawesome/free-solid-svg-icons");

const icons = ["faBalanceScale", "faUserMd", "faUserFriends", "faPhone", "faHeart", "faFileMedicalAlt", "faQuestion", "faBookOpen"]

exports.onClientEntry = () => icons.forEach(icon => svgCore.library.add(svgIcons[icon]));
