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

/**
 * Creates a page for each portfolio item.
 */
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
        let templatePath

        switch (node.frontmatter.category) {
          case 'blog':
            templatePath = './src/templates/blogTemplate.js'
            break
          default:
            templatePath = null
            break
        }

        if (templatePath) {
          // Create blog pages
          createPage({
            path: `/${node.frontmatter.category}/${node.frontmatter.slug}`,
            component: path.resolve(templatePath),
            context: {
              slug: node.frontmatter.slug,
            },
          })
        }
      })

      // Finalize the promise
      resolve()
    })
  })
}
