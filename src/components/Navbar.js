import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo.png";
import { black } from "../styles/colors";
import { spaceSizes } from "../styles/typography";
import Container from "./Container"


const Nav = styled.nav`
  display: flex;
  position: relative;
  height: 80px;
  align-items: center;
  z-index: 1;

  a {
    display: flex;
    position: relative;
    margin: 0 ${spaceSizes.sm};
    align-items: center;
    color: ${black.darker};
    font-weight: normal;
    text-decoration: none;

    &.is-active {
      margin-left: 24px;
      color: ${black.darkest};
      font-weight: 700;

      .navigation-indicator {
        opacity: 1;
      }
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
    title: "New to Medicare",
    path: "new-to-medicare",
    color: "#20BE6B"
  },
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
    </Container>
  </Nav>
);

export default Navbar;
