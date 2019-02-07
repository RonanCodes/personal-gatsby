const path = require('path')
// const helpers = require('./src/helpers')

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

// const { createNodeField } = actions

// createNodeField({
//   node,
//   name: `fileSlug`,
//   value: fileSlug,
// })

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
        // let slug

        // if (node.frontmatter.slug.length > 0) {
        //   slug = node.frontmatter.slug
        // } else {
        //   const filePath = node.fileAbsolutePath
        //   slug = filePath.substr(
        //     filePath.lastIndexOf('/') + 1,
        //     filePath.lastIndexOf('.') - filePath.lastIndexOf('/') - 1
        //   )

        //   // TODO: Via graphQL do a mutation to set the frontmatter.slug to the newly created slug.
        // }

        // const slug =
        //   node.frontmatter.slug.length > 0
        //     ? node.frontmatter.slug
        //     : node.fields.fileSlug

        console.log(node.frontmatter.slug)

        // Blog
        createPage({
          path: `/${node.frontmatter.category}/${node.frontmatter.slug}`,
          component: path.resolve('./src/templates/blogTemplate.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })

        // Portfolio
      })

      // finalise the promise
      resolve()
    })
  })
}

// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */
// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               frontmatter {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       if (result.errors) {
//         throw result.errors
//       }

//       const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

//       // Create blog post pages.
//       result.data.allMarkdownRemark.edges.forEach(edge => {
//         createPage({
//           path: `${edge.node.frontmatter.slug}`,
//           component: blogPostTemplate,
//         })
//       })
//     })
//     resolve()
//   })

//   //   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
//   //   // Query for markdown nodes to use in creating pages.
//   //   // You can query for whatever data you want to create pages for e.g.
//   //   // products, portfolio items, landing pages, etc.
//   //   return graphql(`
//   //     {
//   //       allMarkdownRemark {
//   //         edges {
//   //           node {
//   //             fields {
//   //               slug
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   `).then(result => {
//   //     if (result.errors) {
//   //       throw result.errors
//   //     }

//   //     // Create blog post pages.
//   //     result.data.allMarkdownRemark.edges.forEach(edge => {
//   //       createPage({
//   //         // Path for this page — required
//   //         path: `${edge.node.fields.slug}`,
//   //         component: blogPostTemplate,
//   //         context: {
//   //           // Add optional context data to be inserted
//   //           // as props into the page component..
//   //           //
//   //           // The context data can also be used as
//   //           // arguments to the page GraphQL query.
//   //           //
//   //           // The page "path" is always available as a GraphQL
//   //           // argument.
//   //         },
//   //       })
//   //     })
//   //   })
// }
