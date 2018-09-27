import React from "react";
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

  h1, h2, h3, h4, h5, a {
    color: white;
  }
`;

const ContactMessage = styled.p`
  font-size: ${fontSizes.sm};
`

const FooterHeader = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  margin-bottom: ${spaceSizes.lg};
  text-align: center;
`

const ContactItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${spaceSizes.xs} ${spaceSizes.sm};
`

const ContactItemText = styled.p`
  margin-left: ${spaceSizes.xs};
  text-align: left;
`

const ContactItem = ({ icon, children }) => (
  <ContactItemContainer>
    <FontAwesomeIcon icon={icon} size="2x" fixedWidth />
    <ContactItemText>{children}</ContactItemText>
  </ContactItemContainer>
)

const ContactItems = styled.div`
  display: flex;
`

const Footer = () => (
  <FooterWrapper>
    <Container size="md">
      <FooterHeader>
        <Link to="/">
          <img src={logo} alt="Integra Managed Care - Home" />
        </Link>
        
        <ContactMessage>
          For more information call and speak with one of our associates.<br />
          There is no obligation to enroll.
        </ContactMessage>

        <ContactItems>
          <ContactItem icon="phone">
            <a href="tel:+1 855-800-4683">+1 855-800-4683</a><br />
            TTY: 711
          </ContactItem>

          <ContactItem icon="map-marker">
            1981 Marcus Avenue, Suite 100<br />
            Lake Success, New York 11042
          </ContactItem>
        </ContactItems>
      </FooterHeader>

      <h4>Compliance</h4>
      <p>Integra Managed Care is a HMO plan with Medicare and Medicaid contracts. Enrollment in Integra Managed Care depends on contract renewal. This information is not a complete description of benefits. Contact the plan for more information. Limitations, copayments, and restrictions may apply. Benefits, premiums and/or co-payments/co-insurance may change on January 1 of each year. You must continue to pay your Medicare Part B premium. The Formulary, pharmacy network, and/or provider network may change at any time. You will receive notice when necessary. Premiums, copays, co-insurance and deductibles may vary based on the level of Extra Help you receive. Please contact the Integra Managed Care for further details. Certain plans are available to anyone who has both Medical Assistance from the State and Medicare. Integra Managed Care is available to anyone with Medicare who meets the Skilled Nursing Facility (SNF) level of care and resides in a nursing home. Integra Managed Care complies with applicable Federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. </p>
      <p>Integra Managed Care cumple con las leyes federales de derechos civiles aplicables y no discrimina por motivos de raza, color, nacionalidad, edad, discapacidad o sexo. ATTENTION: If you speak Spanish, language assistance services, free of charge, are available to you. Call 1-877-388-5195 (TTY: 711). ATENCIÓN: si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al 1- 877-388-5195 (TTY: 711). Assistance services for other languages are also available free of charge at the number above. All plan materials and information is available upon request in a different language or alternate formats such as braille, large print and audio.</p>
      <LinkExternal to="https://google.com" title="External link test: google.com" />
    </Container>

  </FooterWrapper>
);

export default Footer;
