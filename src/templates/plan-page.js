import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Lists from "../components/Lists";

export const PageTemplate = ({
  content,
  contentComponent,
  lists
}) => {
  const PageContent = contentComponent || Content;
  return (
    <Container size="lg" vpad flex>
      <div>
        <h3>Plan Information</h3>
        <PageContent content={content} />
      </div>
      <Lists items={lists} />
    </Container>
  );
};

const PlanPage = ({ data }) => {
  const plansPage = data.allMarkdownRemark.edges[0].node.frontmatter;
  const plan = data.markdownRemark;
  const planPage = plan.frontmatter;

  const hero = {
    title: planPage.title,
    image: plansPage.banner.childImageSharp.fluid,
    iconColor: plansPage.indicatorColor,
    iconName: plansPage.iconName,
    isLarge: false
  };
  const magnets = (plansPage.magnets || []).map(magnet => ({ node: magnet }));
  return (
    <Layout
      hero={hero}
      introduction={planPage.introduction}
      magnets={magnets}
      disclaimers={planPage.disclaimers}
    >
      <PageTemplate
        contentComponent={HTMLContent}
        content={plan.html}
        {...plan.frontmatter}
      />
    </Layout>
  );
};

PlanPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PlanPage;

export const planPageQuery = graphql`
  query PlanPage($id: String!) {
    allMarkdownRemark(filter: { frontmatter: { slug: { eq: "plans" } } }) {
      edges {
        node {
          frontmatter {
            title
            subTitle
            iconName
            indicatorColor
            isLarge
            banner {
              childImageSharp {
                fluid(maxWidth: 1440) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        disclaimers
        introduction {
          title
          body
          action {
            text
            icon
            url
            target
          }
        }
        lists {
          title
          type
          items {
            title
            url
            icon
            type
          }
        }
      }
    }
  }
`;
