const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  return graphql(`
    {
      markdown: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              slug
              templateKey
            }
          }
        }
      }
      redirects: allMarkdownRemark(
        filter: {
          frontmatter: {
            id: { eq:"redirects" }
          }
        }
      ) {
        edges {
          node {
            frontmatter {
              list {
                source
                destination
              }
            }
          }
        }
      }

    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.markdown.edges
    const redirects = result.data.redirects.edges[0].node.frontmatter.list
    const pages = posts.filter(edge => edge.node.fileAbsolutePath.indexOf('/pages/') !== -1)
    const plans = posts.filter(edge => edge.node.fileAbsolutePath.indexOf('/our-plans/') !== -1)

    redirects.forEach(redirect => {
      createRedirect({
        fromPath: redirect.source,
        isPermanent: true,
        redirectInBrowser: true,
        toPath: redirect.destination,
      })
    })

    pages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    plans.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: `our-plans/${edge.node.frontmatter.slug}`,
        component: path.resolve(
          `src/templates/plan-page.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  fmImagesToRelative(node);
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}