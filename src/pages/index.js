import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "gatsby-image"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <FontAwesomeIcon style={{ color: "red" }} icon="heart" />
          <Img fluid={this.props.data.file.childImageSharp.fluid} />
        </section>
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
            templateKey
            iconName
            indicatorColor
          }
        }
      }
    }
  }
`;
