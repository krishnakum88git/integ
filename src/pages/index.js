import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { font } from "../styles/typography";

const CenterCopy = styled.div`
  ${font} text-align: center;
  max-width: 856px;
  margin: 0 auto 40px;
  text-align: center;
  font-weight: normal;
`;

const CenterTitle = styled.h3`
  ${font} color: #333333;
  font-size: 45px;
  font-weight: normal;
  margin-bottom: 10px;
`;

const CenterBody = styled.p`
  ${font} color: #333333;
  font-size: 22px;
  font-weight: normal;
  margin: 0;
`;

export default class IndexPage extends React.Component {
  render() {
    const hero = {
      title: "Lorem Ipsum",
      subTitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis cursus lectus iaculis. Mauris pulvinar nisi metus.",
      image: this.props.data.file.childImageSharp.fluid,
      iconColor: "#EE4035",
      iconName: "heart"
    };
    return (
      <Layout hero={hero} magnets={this.props.data.allMarkdownRemark.edges}>
        <CenterCopy>
          <CenterTitle>Dolor Sit Amet</CenterTitle>
          <CenterBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis cursus lectus eu iaculis. Mauris pulvinar nisi metus,
            vitae facilisis risus aliquam at.
          </CenterBody>
        </CenterCopy>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { regex: "/home.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(
      filter: { frontmatter: { isHomepageMagnet: { eq: true } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            iconName
            indicatorColor
            banner {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
