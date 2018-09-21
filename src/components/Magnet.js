import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Wrapper = styled.div``;

const Magnet = ({ linkPath, imgFixed }) => (
  <Link to={linkPath}>
    <Wrapper>
      <Img fixed={imgFixed} />
    </Wrapper>
  </Link>
);

export default Magnet;
