import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

const Navbar = () => (
  <nav>
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Integra Managed Care - Home"
        />
      </Link>
    </div>
    <div>
      <Link to="/new-to-medicare">New to Medicare</Link>
      <Link to="/plans">Our Plans</Link>
      <Link to="/member-resources">Member Resources</Link>
      <Link to="/providers">Providers</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/compliance">Compliance</Link>
      <Link to="/contact-us">Contact Us</Link>
    </div>
  </nav>
);

export default Navbar;
