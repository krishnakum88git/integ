import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Callout from "../components/Callout";

export default class IndexPage extends React.Component {
  render() {
    const homeContent = this.props.data.allMarkdownRemark.edges[0].node.frontmatter;
    const hero = {
      title: homeContent.title,
      subTitle: homeContent.subTitle,
      image: this.props.data.file.childImageSharp.fluid,
      iconColor: homeContent.indicatorColor,
      iconName: homeContent.iconName,
      isLarge: homeContent.isLarge
    };
    return (
      <Layout hero={hero} magnets={homeContent.magnets} disclaimers={homeContent.disclaimers}>
        <div id="content"></div>
        <Callout>
          Integra Managed Care offers Medicare Advantage Prescription Drug Plans and a Medicare-Medicaid Plan option that gives you flexibility in choosing a health plan that’s right for you and helps maintain your overall health and well-being.
        </Callout>

        <Callout
          title={<span>Need help finding a plan<br />that may be a good fit for you?</span>}
          type="secondary"
        >
          Call Toll-Free 1-877-388-5195 TTY: 711
        </Callout>

        <Callout
          title={<span>Integra Managed Care<sup>®</sup> Medicare Advantage plans may offer:</span>}
          action={{
            text: "View Our Plans",
            icon: "book-open",
            url: "/our-plans"
          }}
        >
          <ul>
            <li>Low cost premiums, some as low as $0</li>
            <li>Out-of-pocket maximums to help prevent financial surprises</li>
            <li>Prescription drug coverage for thousands of brand name &amp; generic drugs</li>
          </ul>
        </Callout>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    file(relativePath: { regex: "/home.jpg/" }) {
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
            isLarge
            disclaimers
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
