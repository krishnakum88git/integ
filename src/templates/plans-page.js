import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Container from "../components/Container";
import Callout from "../components/Callout";
import Lists from "../components/Lists";

export const PlansPageTemplate = ({ content, listDirection, pagePadTop, pagePadBot, lists, pageSize, contentComponent }) => {
  const PageContent = contentComponent || Content;
  const shouldPadTop = pagePadTop !== null ? pagePadTop: !!content;
  const shouldPadBot = pagePadBot !== null ? pagePadBot: !!content;
  return (
    <Container
      id="content"
      size={pageSize || "lg"}
      pagePadTop={shouldPadTop}
      pagePadBot={shouldPadBot}
      flex
    >
      <PageContent content={content} />
      <Lists items={lists} direction={listDirection} />
    </Container>
  );
};

PlansPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const PlansPage = ({ data }) => {
  const { markdownRemark: post } = data;

  const hero = {
    title: post.frontmatter.title,
    subTitle: post.frontmatter.subTitle,
    image: post.frontmatter.banner.childImageSharp.fluid,
    iconColor: post.frontmatter.indicatorColor,
    iconName: post.frontmatter.iconName,
    alignLeft: post.frontmatter.alignLeft
  };

  const magnets = (post.frontmatter.magnets || []).map(magnet => ({
    node: magnet
  }));

  const plans = (data.plans.edges || []).map(plan =>
    plan.node.childMarkdownRemark.frontmatter.introductionFeature
  );

  const { lists: contactListsRaw, ...contactInfo } = data.contactInfo.edges[0].node.frontmatter;

  const contactLists = post.frontmatter.shouldIncludeContactInfo ? contactListsRaw : []
  const enrollmentInfo = post.frontmatter.shouldIncludeEnrollmentInfo ? data.enrollmentInfo.edges[0].node.frontmatter.lists : []
  const lists = [...contactLists, ...enrollmentInfo, ...(post.frontmatter.lists || [])];
  return (
    <Layout
      title={post.frontmatter.title}
      hero={hero}
      magnets={magnets}
      disclaimers={post.frontmatter.disclaimers}
      navContact={contactInfo}
      cmsInfo={data.cmsInfo.edges[0].node.frontmatter}
    >
      {plans.map((plan, i) => <Callout key={i} {...plan} />)}
      <PlansPageTemplate
        contentComponent={HTMLContent}
        content={post.html}
        {...post.frontmatter}
        plans={plans}
        lists={lists}
      />
    </Layout>
  );
};

PlansPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default PlansPage;

export const pageQuery = graphql`
  query PlansPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subTitle
        iconName
        indicatorColor
        alignLeft
        shouldIncludeContactInfo
        shouldIncludeEnrollmentInfo
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
        lists {
          title
          type
          items {
            title
            url
            file
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

    plans: allFile(
      filter: {internal: {mediaType: {eq: "text/markdown"}}, sourceInstanceName: {eq: "our-plans"}}
      sort: { fields: [name], order: ASC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              introductionFeature {
                title
                body
                action {
                  text
                  icon
                  url
                }
              }
            }
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

    contactInfo: allMarkdownRemark(filter:{fields:{slug :{eq : "/contact-info/"}}}) {
      edges {
        node {
          frontmatter {
            enrollmentContactNumber
            abbreviatedHours
            enrollNowURL
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

    enrollmentInfo: allMarkdownRemark(filter:{fields:{slug :{eq : "/enrollment-info/"}}}) {
      edges {
        node {
          frontmatter {
            lists {
              title
              items {
                title
                icon
                url
                file
                type
              }
            }
          }
        }
      }
    }
  }
`;
