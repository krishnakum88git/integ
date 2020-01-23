import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { spaceSizes } from "../styles/typography";
import { black } from "../styles/colors";
import Link from "./Link";

const getIcon = type => {
  switch (type) {
    case "document":
      return "file-alt";
    case "resource":
      return "link";
    default:
      return "dot-circle";
  }
};

const Icon = styled(FontAwesomeIcon)`
  margin: 4px ${spaceSizes.xs} 0 0;
  color: ${black.lighter};
  width: 1.25em;
  height: 1em;
  overflow: visible;
`;

const List = styled.div``;

const ListItems = styled.ul`
  margin-bottom: ${spaceSizes.md};
  padding: 0;
  list-style-type: none;
`;

const ListItemBody = styled.li`
  display: flex;
  margin: ${spaceSizes.sm} 0;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const TitleBody = styled.span`
  margin: 0;
  line-height: 1;
  font-size: 22px;
  font-weight: 800;
`;

const Title = props =>
  props.text ? <TitleBody>{props.text}</TitleBody> : null;

const parseNewlines = text => (text ? text.split("\\n").join("\n") : text);

export const ListItem = props => (
  <ListItemBody>
    <Icon icon={props.icon || getIcon(props.type)} fixedWidth />
    {props.url || props.file || props.to ? (
      <Link to={props.url || props.file}>{parseNewlines(props.title)}</Link>
    ) : (
      parseNewlines(props.title)
    )}
  </ListItemBody>
);

export default ({ title, type, items = [] }) => (
  <List className="list">
    <Title text={title} />
    <ListItems>
      {items.map(item => (
        <ListItem key={item.title} {...item} type={type || item.type} />
      ))}
    </ListItems>
  </List>
);
