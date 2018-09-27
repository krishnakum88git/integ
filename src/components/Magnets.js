import React from "react";
import styled from "styled-components";
import Magnet from "./Magnet";

const Magnets = styled.section`
  position: relative;
  
  &:before {
    position: absolute;
    content: " ";
    bottom: 0;
    width: 100%;
    height: 70%;
    background-color: #D1D8DF;
  }
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  width: 1200px;
`

export default ({ magnets }) => (
  <Magnets>
    <Container>
      {magnets.map(node => {
        const magnet = node.node || node;
        return <Magnet key={magnet.id} {...magnet.frontmatter} />
      })}
    </Container>
  </Magnets>
);
