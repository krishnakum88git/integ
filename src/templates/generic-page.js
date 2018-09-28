import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Lists from "../components/Lists";

export const PageTemplate = ({ content, listDirection, pagePadTop = !!content, pagePadBot = !!content, lists, pageSize, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <Container
      size={pageSize || "lg"}
      pagePadTop={pagePadTop}
      pagePadBot={pagePadBot}
      flex
    >
      <PageContent content={content} />
      <Lists items={lists} direction={listDirection} />
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

  const contactInfo = post.frontmatter.shouldIncludeContactInfo ? data.contactInfo.edges[0].node.frontmatter.lists : []
  const lists = [...contactInfo, ...(post.frontmatter.lists || [])];
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
        lists={lists}
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
        shouldIncludeContactInfo
        disclaimers
        pageSize
        listDirection
        pagePadTop
        pagePadBot
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
            subTitle
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

    contactInfo: allMarkdownRemark(filter:{fields:{slug :{eq : "/contact-info/"}}}) {
      edges {
        node {
          frontmatter {
            lists {
              title
              items {
                title
                icon
              }
            }
          }
        }
      }
    }
  }
`;
