import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import { font } from "../styles/typography"

const Link = styled(GatsbyLink)`
  ${font}
  color: #555555;
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

const Navbar = () => (
  <Nav>
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Integra Managed Care - Home"
        />
      </Link>
    </div>
    <NavItems>
      <Link to="/new-to-medicare">New to Medicare</Link>
      <Link to="/plans">Our Plans</Link>
      <Link to="/member-resources">Member Resources</Link>
      <Link to="/providers">Providers</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/compliance">Compliance</Link>
      <Link to="/contact-us">Contact Us</Link>
    </NavItems>
  </Nav>
);

export default Navbar;
