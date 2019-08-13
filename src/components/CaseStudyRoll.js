import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'
import TransitionLink from 'gatsby-plugin-transition-link'
import {TimelineMax, Power1} from 'gsap'

class CaseStudyRoll extends React.Component {
  fadePageOut(exit, node) {
    return new TimelineMax()
        .to(node.querySelector('.page-content'), 1, { opacity: 0})
        .set(node.querySelector('.page-content'), { opacity: 0})
  }
  slideCaseStudyUp(entry, node) {
    return new TimelineMax()
        .set(node.querySelector('.case-study'), {y: '100vh', opacity: 0})
        .to(node.querySelector('.case-study'), .5, {y: '0', opacity: 1, ease: Power1.easeInOut,})
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <div className="case-studies-container">
          {posts &&
            posts.map(({ node: post }, index) => (
              <div className={`${post.frontmatter.tilesize} ${post.frontmatter.pushright ? 'push-right' : ''} case-study-tile`}
                   key={post.id}
              >
                <article className="case-study-item tile">
                  <TransitionLink
                      className="case-study-item-link"
                      to={post.fields.slug}
                      exit={{
                        length: 1,
                        trigger: ({ exit, node }) => this.fadePageOut(exit, node),
                      }}
                      entry={{
                        length: 3,
                        delay: 0.5,
                        trigger: ({ entry, node }) => this.slideCaseStudyUp(entry, node),
                      }}
                  >
                    <figure className="case-study-img"
                            style={{
                              backgroundImage: `url(${
                                  !!post.frontmatter.featuredimage.childImageSharp ? post.frontmatter.featuredimage.childImageSharp.fluid.src : post.frontmatter.featuredimage
                                  })`,
                              backgroundPosition: `top left`,
                              backgroundSize: `cover`,
                            }}>
                      <figcaption>
                        <h3>{post.frontmatter.title}</h3>
                        {post.excerpt}
                      </figcaption>
                    </figure>
                  </TransitionLink>
                  <h4>{index + 1} - {post.frontmatter.title}</h4>
                </article>
              </div>
          ))}
        </div>
    )
  }
}

CaseStudyRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
    <StaticQuery query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 60)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                tilesize
                pushright
                order
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 2048, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
     render={(data, count) => <CaseStudyRoll data={data} count={count} />}
    />
)
