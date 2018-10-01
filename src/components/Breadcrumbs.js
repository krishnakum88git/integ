import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import Link from '../components/Link'
import { spaceSizes } from '../styles/typography'
import { black } from '../styles/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Breadcrumbs = styled.ul`
  display: flex;
  position: relative;
  padding: ${spaceSizes.sm} ${spaceSizes.md};
  list-style-type: none;
  background-color: ${black.ultralight};
  border-radius: ${spaceSizes.sm};
  width: 100%;
`

const Breadcrumb = styled.li`
  margin-right: ${spaceSizes.sm};
`

const Icon = styled(FontAwesomeIcon)`
  margin-left: ${spaceSizes.sm};
  color: ${black.light};
`

export default ({ items = [] }) => (
  <Container size="lg">
    <Breadcrumbs>
      {items.map((item, i) => (
        <Breadcrumb key={i}>
          {item.url ? (
            <Link to={item.url}>
              {item.title}
            </Link>
          ): item.title}

          {i < items.length - 1 && (
            <Icon icon="angle-right" />
          )}
        </Breadcrumb>
      ))}
    </Breadcrumbs>
  </Container>
)