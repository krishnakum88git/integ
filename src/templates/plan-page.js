import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Callout from "../components/Callout";

import styled from "styled-components";
import { link } from "../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanColumns = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const ResourceCollection = styled.div`
  margin: 0 0 20px;
`;

const Icon = styled(FontAwesomeIcon)`
  && {
    color: #bbbbbb;
    height: 24px;
    width: 24px;
    padding: 10px;
  }
`;

const PlanResources = styled.div`
  min-width: 480px;
  margin-left: 64px;
`;

const ResourceLinkContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${link};
    text-decoration: none;
    font-size: 22px;
  }
`;

const ResourceLink = ({ title, iconName }) => (
  <ResourceLinkContainer>
    <Icon icon={iconName} /> <a href="/plans">{title}</a>
  </ResourceLinkContainer>
);

const DocumentLink = props => <ResourceLink iconName="file-alt" {...props} />;
const WebLink = props => <ResourceLink iconName="link" {...props} />;

export const PageTemplate = ({
  content,
  contentComponent,
  introduction,
  documents,
  links
}) => {
  const PageContent = contentComponent || Content;
  return (
    <section>
      <Callout {...introduction} />
      <PlanColumns>
        <div>
          <h3>Plan Information</h3>
          <PageContent content={content} />
        </div>
        <PlanResources>
          <h4>Plan Resources</h4>
          <ResourceCollection>
            {(documents || []).map(document => (
              <DocumentLink key={document.title} {...document} />
            ))}
          </ResourceCollection>
          <ResourceCollection>
            {(links || []).map(link => (
              <WebLink key={link.title} {...link} />
            ))}
          </ResourceCollection>
        </PlanResources>
      </PlanColumns>
    </section>
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
    <Layout hero={hero} magnets={magnets}>
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
        documents {
          title
          path
        }
        links {
          title
          url
        }
      }
    }
  }
`;
