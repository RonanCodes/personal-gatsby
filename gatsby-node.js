/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    ensureSlugExists(node, getNode)
  }
}

function ensureSlugExists(node, getNode) {
  if (!node.frontmatter.slug) {
    let fileSlug = createFilePath({
      node,
      getNode,
      basePath: `content`,
      trailingSlash: false,
    })
    node.frontmatter.slug = fileSlug.slice(1)
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // We want this method call to be async (not block) so we return a promise, it's not needed, but makes boot time quicker
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                category
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        // Blog
        createPage({
          path: `/${node.frontmatter.category}/${node.frontmatter.slug}`,
          component: path.resolve('./src/templates/blogTemplate.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })

        // TODO: use portfolio template for portfolio files
        // Portfolio
      })

      // finalise the promise
      resolve()
    })
  })
}
