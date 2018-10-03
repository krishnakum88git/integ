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

export default () => (
  <NavbarContact>
    <Title>Call for Eligibility and Enrollment</Title>
    <Item><Icon icon="phone" fixedWidth /> 1-877-388-5190 TTY: 711</Item>
    <Item><Icon icon="clock" fixedWidth /> 8:00 am to 8:00 pm</Item>
  </NavbarContact>
)