import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import { black } from "../styles/colors";
import Container from "./Container"
import NavbarContact from "./NavbarContact"

const Nav = styled.nav`
  display: flex;
  position: relative;
  height: 80px;
  align-items: center;
  z-index: 4;

  a {
    display: flex;
    position: relative;
    margin: 0 14px;
    align-items: center;
    color: ${black.darker};
    font-weight: 800;
    text-decoration: none;

    &.is-active {
      margin-left: 24px;
      color: ${black.darkest};
      font-weight: 800;

      .navigation-indicator {
        opacity: 1;
      }
    }

    &:active,
    &:visited,
    &:hover,
    &:focus {
      color: ${black.darker};
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

const items = [
  {
    title: "Our Plans",
    path: "our-plans",
    color: "#F7B731"
  },
  {
    title: "Member Resources",
    path: "member-resources",
    color: "#4B7BEC"
  },
  {
    title: "Provider Search",
    path: "provider-search",
    color: "#A55EEA"
  },
  {
    title: "Medicare 101",
    path: "medicare-101",
    color: "#20BE6B"
  },
  {
    title: "About Us",
    path: "about-us",
    color: "#FA8231"
  },
  {
    title: "Compliance",
    path: "compliance",
    color: "#0FB8B1"
  },
  {
    title: "Contact Us",
    path: "contact-us",
    color: "#45AAF2"
  }
];

const isPartiallyActive = ({isPartiallyCurrent}) =>
  isPartiallyCurrent
    ? { className: "is-active" }
    : null

const Navbar = () => (
  <Nav>
    <Container flex={true} alignItems="center">
      <Link to="/" style={{marginRight: 'auto'}}>
        <img src={logo} style={{width: 200}} alt="Integra Managed Care - Home" />
      </Link>
      {items.map(item => (
          <Link
            getProps={isPartiallyActive}
            key={item.path}
            to={item.path}
          >
            <Indicator className="navigation-indicator" color={item.color} />
            {item.title}
          </Link>
        ))}
      <NavbarContact />
    </Container>
  </Nav>
);

export default Navbar;
