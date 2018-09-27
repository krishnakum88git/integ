import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Lists from "../components/Lists";

export const PageTemplate = ({ content, lists, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <Container size="lg" vpad flex>
      <PageContent content={content} />
      <Lists items={lists} />
    </Container>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const Page = ({ data }) => {
  const { markdownRemark: post } = data;

  const hero = {
    title: post.frontmatter.title,
    subTitle: post.frontmatter.subTitle,
    image: post.frontmatter.banner.childImageSharp.fluid,
    iconColor: post.frontmatter.indicatorColor,
    iconName: post.frontmatter.iconName,
    isLarge: post.frontmatter.isLarge
  };

  const magnets = (post.frontmatter.magnets || []).map(magnet => ({
    node: magnet
  }));
  return (
    <Layout
      hero={hero}
      introduction={post.frontmatter.introduction}
      magnets={magnets}
      disclaimers={post.frontmatter.disclaimers}
    >
      <PageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        {...post.frontmatter}
      />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired
};

export default Page;

export const pageQuery = graphql`
  query Page($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        iconName
        indicatorColor
        isLarge
        disclaimers
        banner {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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
        magnets {
          id
          frontmatter {
            title
            iconName
            indicatorColor
            slug
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
