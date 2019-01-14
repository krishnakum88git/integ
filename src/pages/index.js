import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Callout from "../components/Callout"

export const PageTemplate = ({ lead, callout, callToAction }) => {
  return (
    <React.Fragment>
      <div id="content" />
      <Callout flex={false}>
        {lead}
      </Callout>
      <Callout {...callout} type="secondary" />
      <Callout {...callToAction} />
    </React.Fragment>
  );
};

export default class IndexPage extends React.Component {
  render() {
    const { allMarkdownRemark, contactInfo, cmsInfo } = this.props.data
    const homeContent = allMarkdownRemark.edges[0].node.frontmatter
    const hero = {
      title: homeContent.title,
      subTitle: homeContent.subTitle,
      image: homeContent.banner.childImageSharp.fluid,
      iconColor: homeContent.indicatorColor,
      iconName: homeContent.iconName,
      alignLeft: homeContent.alignLeft
    }
    return (
      <Layout
        hero={hero}
        magnets={homeContent.magnets}
        disclaimers={homeContent.disclaimers}
        navContact={contactInfo.edges[0].node.frontmatter}
        cmsInfo={cmsInfo.edges[0].node.frontmatter}
      >
        <PageTemplate
          lead={homeContent.lead}
          callout={homeContent.callout}
          callToAction={homeContent.callToAction}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    contactInfo: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/contact-info/" } } }
    ) {
      edges {
        node {
          frontmatter {
            enrollmentContactNumber
            abbreviatedHours
            enrollNowURL
          }
        }
      }
    }

    cmsInfo: allMarkdownRemark(filter:{fields:{slug :{eq : "/cms-info/"}}}) {
      edges {
        node {
          frontmatter {
            cmsMaterialID
            lastModified
          }
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
            alignLeft
            banner {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            lead
            callout {
              title
              body
            }
            callToAction {
              title
              points
              action {
                text
                icon
                url
              }
            }
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
`
