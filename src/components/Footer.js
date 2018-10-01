import React, { Fragment } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import LinkExternal from "./Link";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../img/white-logo.png";
import { spaceSizes, fontSizes } from "../styles/typography";
import { blacks } from "../styles/colors";

const FooterWrapper = styled.footer`
  display: flex;
  background-color: #333;
  flex-direction: column;
  align-items: center;
  padding: ${spaceSizes.lg} 0;
  color: ${blacks[4]};

  h1,
  h2,
  h3,
  h4,
  h5,
  a {
    color: white;
  }
`;

const ContactMessage = styled.p`
  font-size: ${fontSizes.sm};
`;

const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spaceSizes.lg};
  text-align: center;
`;

const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${spaceSizes.xs} ${spaceSizes.sm};
`;

const ContactItemText = styled.p`
  margin-left: ${spaceSizes.xs};
  margin-bottom: 0;
  text-align: left;
`;

const ContactItem = ({ icon, children }) => (
  <ContactItemContainer>
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
    <ContactItemText>{children}</ContactItemText>
  </ContactItemContainer>
);

const ContactItems = styled.div`
  display: flex;
`;

const Disclaimers = ({ disclaimers }) => (
  <Fragment>
    <h4>Disclaimers</h4>
    {disclaimers.map((disclaimer,i) => <p key ={i}>{disclaimer}</p>)}
  </Fragment>
);

const Footer = ({ disclaimers }) => (
  <FooterWrapper>
    <Container size="lg">
      <FooterHeader>
        <Link to="/">
          <img src={logo} alt="Integra Managed Care - Home" />
        </Link>

        <ContactMessage>
          For more information call and speak with one of our associates.
          <br />
          There is no obligation to enroll.
        </ContactMessage>

        <ContactItems>
          <ContactItem icon="phone">
            <a href="tel:+1 855-800-4683">+1 855-800-4683</a>
            <br />
            TTY: 711
          </ContactItem>

          <ContactItem icon="map-marker">
            1981 Marcus Avenue, Suite 100
            <br />
            Lake Success, New York 11042
          </ContactItem>
        </ContactItems>
      </FooterHeader>

      {disclaimers && disclaimers.length > 0 && <Disclaimers disclaimers={disclaimers} />}
      <LinkExternal
        to="https://google.com"
        title="External link test: google.com"
      />
    </Container>
  </FooterWrapper>
);

export default Footer;
