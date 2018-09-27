import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { spaceSizes } from '../styles/typography'
import { black } from '../styles/colors'
import Link from './Link'

const getIcon = type => {
  switch (type) {
    case "document":
      return "file-alt"
    case "resource":
      return "link"
    default:
      return "dot-circle"
  }
}

const Icon = styled(FontAwesomeIcon)`
  margin: 3px ${spaceSizes.xs} 0 0;
  color: ${black.lighter};
`;

const List = styled.div`
`

const ListItems = styled.ul`
  margin-bottom: ${spaceSizes.md};
  padding: 0;
  list-style-type: none;
`

const ListItemBody = styled.li`
  display: flex;
  margin: ${spaceSizes.sm} 0;
`

const TitleBody = styled.h5`
  margin: 0;
`

const Title = props => props.text ? (
  <TitleBody>
    {props.text}
  </TitleBody>
) : null

export const ListItem = props => (
  <ListItemBody>
    <Icon icon={props.icon || getIcon(props.type)} fixedWidth />
    {props.url || props.to ? (
      <Link to={props.url}>{props.title}</Link>
    ) : props.title}
  </ListItemBody>
)

export default ({title, type, items = []}) => (
  <List>
    <Title text={title} />
    <ListItems>
      {items.map(item =>
        <ListItem key={item.title} {...item} type={type || item.type} />
      )}
    </ListItems>
  </List>
)