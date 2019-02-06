const path = require('path')

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
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
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
