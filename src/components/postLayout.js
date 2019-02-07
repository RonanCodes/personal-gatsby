// import React, { Component } from 'react'
// import { graphql } from 'gatsby'
// import Layout from './layout'
// // import { Spring } from 'react-spring'

// export default class postLayout extends Component {
//   render() {
//     const { frontmatter, html } = this.props.data.markdownRemark
//     const { location } = this.props

//     // const props = useSpring({ opacity: toggle ? 1 : 0 })
//     // const props = useSpring({ opacity: 1, color: 'red' })
//     // const props = useSpring({ to: { opacity: 1, color: 'red' } })
//     // const props = useSpring({ opacity: toggle ? 1 : 0 })
//     // const springs = useSprings(
//     //   number,
//     //   items.map(item => ({ opacity: item.opacity }))
//     // )
//     // return <animated.div style={props}>i will fade</animated.div>

//     // const props = useSpring({
//     //   to: [
//     //     { opacity: 1, color: '#ffaaee' },
//     //     { opacity: 0, color: 'rgb(14,26,19)' },
//     //   ],
//     //   from: { opacity: 0, color: 'red' },
//     // })
//     // // ...
//     // return <animated.div style={props}>I will fade in and out</animated.div>

//     return (
//       <Layout location={location}>
//         <h1>{frontmatter.title}</h1>
//         <div dangerouslySetInnerHTML={{ __html: html }} />
//       </Layout>
//     )
//   }
// }

// // this gets ran on load, and the data object added to this pages props object
// export const query = graphql`
//   query PostQuery($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//         slug
//       }
//     }
//   }
// `
