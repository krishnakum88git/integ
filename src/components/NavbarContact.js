import React from 'react'
import styled from 'styled-components'
import { spaceSizes } from '../styles/typography'
import { blue } from '../styles/colors'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarContact = styled.div`
  position: absolute;
  padding: ${spaceSizes.sm} ${spaceSizes.md};
  background-color: ${blue};
  top: 67px;
  right: 0;
  border-bottom-left-radius: ${spaceSizes.sm};
  border-bottom-right-radius: ${spaceSizes.sm};
  color: white;
`

const Title = styled.h5`
  margin-top: 0;
`

const Item = styled.p`
  margin-bottom: 0;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${spaceSizes.xs};
`

const ItemLink = styled.a`
  && {
    margin: 0;
    display: inline;
    color: white;
    font-weight: normal;
    cursor: default;

    &&:hover, &&:visited {
      color: white;
      text-decoration: none;
    }
  }
`;

const ButtonLink = styled(ItemLink)`
  &&&& {
    font-weight: bold;
    color: #ffffff;
    cursor: pointer;
    &&&&:hover {
      text-decoration: underline;
    }
  }
`;

export default ({abbreviatedHours, enrollmentContactNumber, enrollNowURL}) => (
  <NavbarContact>
    <Title>Call for Eligibility and Enrollment</Title>
    <Item><Icon icon="phone" fixedWidth /> <ItemLink href={`tel:${(enrollmentContactNumber || "").slice(0,14)}`}>{enrollmentContactNumber}</ItemLink></Item>
    <Item><Icon icon="clock" fixedWidth /> {abbreviatedHours}</Item>
    <Item><Icon icon="check" fixedWidth /> <ButtonLink href={enrollNowURL}>Enroll Now</ButtonLink></Item>
  </NavbarContact>
)