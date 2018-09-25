import React from "react";
import styled from "styled-components";
import Magnet from "./Magnet";

const Magnets = styled.section`
  display: flex;
  justify-content: center;
`;

export default ({ magnets }) => (
  <Magnets>
    {magnets.map(node => {
      const magnet = node.node || node;
      return <Magnet key={magnet.id} {...magnet.frontmatter} />
    })}
  </Magnets>
);
