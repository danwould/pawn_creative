import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import TransitionLink from 'gatsby-plugin-transition-link'
import {TimelineMax, Power1} from 'gsap'

class CaseStudyRoll extends React.Component {
  fadePageOut(exit, node) {
    return new TimelineMax()
        .to(node.querySelector('main'), 1, { opacity: 0})
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
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className={`${post.frontmatter.tilesize}-tile ${post.frontmatter.pushright}`} key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <figure className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${
                            post.title
                          }`,
                        }}
                      />
                      <figcaption>
                        <h3>{post.frontmatter.title}</h3>
                        {post.excerpt}
                      </figcaption>
                    </figure>
                  ) : null}
                  <p className="post-meta">
                    <TransitionLink
                      className="title has-text-primary is-size-4"
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
                      {post.frontmatter.title}
                    </TransitionLink>
                  </p>
                </header>
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
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                tilesize
                pushright
                order
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
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
