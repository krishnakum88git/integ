import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { font } from "../styles/typography";
import Link from "../components/Link";

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
    const homeContent = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;
    const hero = {
      title: homeContent.title,
      subTitle: homeContent.subTitle,
      image: this.props.data.file.childImageSharp.fluid,
      iconColor: homeContent.indicatorColor,
      iconName: homeContent.iconName
    };
    return (
      <Layout hero={hero} magnets={homeContent.magnets}>
        <CenterCopy>
          <CenterTitle>Dolor Sit Amet</CenterTitle>
          <CenterBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            convallis cursus lectus eu iaculis. Mauris pulvinar nisi metus,
            vitae facilisis risus aliquam at.
          </CenterBody>
          <p><Link to="https://google.com" title="External link test: google.com" /></p>
        </CenterCopy>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { regex: "/home.png/" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "home" } } }) {
      edges {
        node {
          frontmatter {
            title
            subTitle
            iconName
            indicatorColor
            magnets {
              id
              frontmatter {
                title
                iconName
                slug
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
    }
  }
`;
