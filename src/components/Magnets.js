import React from "react";
import styled from "styled-components";
import Magnet from "./Magnet";

const Magnets = styled.section`
  display: flex;
  justify-content: center;
`;

export default ({magnets}) => (
  <Magnets>
    {magnets.map(({ node }) => (
      <Magnet key={node.id} {...node.frontmatter} />
    ))}
  </Magnets>
);
