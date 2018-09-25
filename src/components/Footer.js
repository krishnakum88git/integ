import React from "react";
import { Link } from "gatsby";
import logo from "../img/white-logo.png";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #333;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
`;

const Footer = () => (
  <FooterWrapper>
    <Content>
      <div>
        <Link to="/">
          <img src={logo} alt="Integra Managed Care - Home" />
        </Link>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p>
          For more information call and speak with one of our associates. There
          is no obligation to enroll.
        </p>
        <h4>Location</h4>
        <address>
          1981 Marcus Avenue, Suite 100
          <br />
          Lake Success, New York 11042
        </address>
        <h4>Phone</h4>
        <p>
          +1 855-800-4683
          <br />
          TTY: 711
        </p>
      </div>
      <div>
        <h3>Compliance</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          consectetur ante. Duis hendrerit rutrum venenatis. Curabitur ac
          facilisis ante.
        </p>
        <p>
          Pellentesque ultrices enim sagittis, lacinia urna egestas, accumsan
          nulla. Donec ac arcu vulputate nibh finibus mattis. Mauris semper ante
          orci, sed efficitur nisi condimentum eget. Nunc convallis turpis vel
          odio tempus vehicula.
        </p>
      </div>
    </Content>
  </FooterWrapper>
);

export default Footer;
