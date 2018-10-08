import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const NotFoundPage = ({ data }) => {
  return (
    <Layout
      hero={{
        title: "404",
        subTitle: "The page you are looking for cannot be found."
      }}
      navContact={data.contactInfo.edges[0].node.frontmatter}
      cmsInfo={data.cmsInfo.edges[0].node.frontmatter}
    >
      <div style={{ height: 200 }} />
    </Layout>
  );
};

export default NotFoundPage;

export const contactUsQuery = graphql`
  query FourOhFour {
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

    cmsInfo: allMarkdownRemark(
      filter: { fields: { slug: { eq: "/cms-info/" } } }
    ) {
      edges {
        node {
          frontmatter {
            cmsMaterialID
            lastModified
          }
        }
      }
    }
  }
`;
