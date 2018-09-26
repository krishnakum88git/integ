import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo.png";
import { font } from "../styles/typography";

const Link = styled(GatsbyLink)`
  ${font} color: #555555;
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  margin: 0px 15px;
`;

const NavItems = styled.div``;

const Nav = styled.nav`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 80px;
  position: relative;
  z-index: 1;
`;

const items = [
  {
    title: "New to Medicare",
    path: "/new-to-medicare",
    color: "#20BE6B"
  },
  {
    title: "Plans",
    path: "/plans",
    color: "#F7B731"
  },
  {
    title: "Member Resources",
    path: "/member-resources",
    color: "#4B7BEC"
  },
  {
    title: "Providers",
    path: "/providers",
    color: "#A55EEA"
  },
  {
    title: "About Us",
    path: "/about-us",
    color: "#FA8231"
  },
  {
    title: "Compliance",
    path: "/compliance",
    color: "#0FB8B1"
  },
  {
    title: "Contact Us",
    path: "/contact-us",
    color: "#45AAF2"
  }
];

const Navbar = () => (
  <Nav>
    <div>
      <Link to="/">
        <img src={logo} style={{width: 200}} alt="Integra Managed Care - Home" />
      </Link>
    </div>
    <NavItems>
      {items.map(item => (
        <Link
          activeStyle={{ color: item.color }}
          key={item.path}
          to={item.path}
        >
          {item.title}
        </Link>
      ))}
    </NavItems>
  </Nav>
);

export default Navbar;
