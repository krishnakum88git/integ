import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import logo from "../img/white-logo.png";
import { font } from "../styles/typography";

const FooterWrapper = styled.footer`
  background-color: #333;
  display: flex;
  justify-content: center;
  padding: 88px 0;
`;

const Content = styled.div`
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
`;

const Column = styled.article`
  width: 30%;
`;

const ColumnHeading = styled.h4`
  color: #ffffff;
  font-weight: 700;
  margin: 10px 0;
`;

const ColumnSubHeading = styled.h5`
  color: #ffffff;
  font-weight: 700;
  margin: 10px 0;
`;

const ColumnBody = css`
  ${font} color: #bbbbbb;
  font-size: 16px;
  font-weight: normal;
  margin: 10px 0;
`;

const ColumnCopy = styled.p`
  ${ColumnBody};
`;
const ColumnAddress = styled.address`
  ${ColumnBody} font-style: normal;
`;

const Footer = () => (
  <FooterWrapper>
    <Content>
      <Column>
        <Link to="/">
          <img src={logo} alt="Integra Managed Care - Home" />
        </Link>
      </Column>
      <Column>
        <ColumnHeading>Contact Us</ColumnHeading>
        <ColumnCopy>
          For more information call and speak with one of our associates. There
          is no obligation to enroll.
        </ColumnCopy>
        <ColumnSubHeading>Location</ColumnSubHeading>
        <ColumnAddress>
          1981 Marcus Avenue, Suite 100
          <br />
          Lake Success, New York 11042
        </ColumnAddress>
        <ColumnSubHeading>Phone</ColumnSubHeading>
        <ColumnCopy>
          +1 855-800-4683
          <br />
          TTY: 711
        </ColumnCopy>
      </Column>
      <Column>
        <ColumnHeading>Compliance</ColumnHeading>
        <ColumnCopy>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          consectetur ante. Duis hendrerit rutrum venenatis. Curabitur ac
          facilisis ante.
        </ColumnCopy>
        <ColumnCopy>
          Pellentesque ultrices enim sagittis, lacinia urna egestas, accumsan
          nulla. Donec ac arcu vulputate nibh finibus mattis. Mauris semper ante
          orci, sed efficitur nisi condimentum eget. Nunc convallis turpis vel
          odio tempus vehicula.
        </ColumnCopy>
      </Column>
    </Content>
  </FooterWrapper>
);

export default Footer;
