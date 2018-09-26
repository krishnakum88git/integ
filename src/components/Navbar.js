import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo.png";
import { font } from "../styles/typography";
import { blacks } from "../styles/colors";

const Link = styled(GatsbyLink)`
  display: flex;
  position: relative;
  align-items: center;
  color: ${blacks[1]};
  font-size: 16px;
  font-weight: normal;
  text-decoration: none;
  margin: 0px 16px 0 24px;

  &.is-active {
    .navigation-indicator {
      opacity: 1;
    }
  }
`;

const Indicator = styled.div`
  position: absolute;
  left: -16px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.color || 'transparent'};
  opacity: 0;
  will-change: opacity;
  transition: .2s ease-out opacity;
`

const NavItems = styled.div`
  display: flex;
`;

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
    title: "Our Plans",
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
          activeStyle={{ color: blacks[0], fontWeight: 700 }}
          activeClassName='is-active'
          key={item.path}
          to={item.path}
        >
          <Indicator className="navigation-indicator" color={item.color} />
          {item.title}
        </Link>
      ))}
    </NavItems>
  </Nav>
);

export default Navbar;
