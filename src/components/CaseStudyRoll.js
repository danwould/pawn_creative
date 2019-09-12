import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
//import PreviewCompatibleImage from './PreviewCompatibleImage'
import TransitionLink from 'gatsby-plugin-transition-link'
import {TimelineMax, Power1} from 'gsap'
import isSticky from '../helpers/isSticky'

class CaseStudyRoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    let caseStudyContainer = document.querySelector('.case-studies-container');
    let classToToggle = "fixed";

    isSticky(caseStudyContainer, classToToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

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
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="case-studies-container">
          {posts &&
            posts.map(({ node: post }, index) => (
              <article className={`${post.frontmatter.tilesize} ${post.frontmatter.pushright ? 'push-right' : ''} case-study-tile`}
                     ref={`case-study-tile-${index}`}
                     key={post.id}
              >
                  <section className="case-study-item">
                    <TransitionLink
                        className="case-study-item-link"
                        to={post.fields.slug}
                        exit={{
                          length: 0.15,
                          trigger: ({ exit, node }) => this.fadePageOut(exit, node),
                        }}
                        entry={{
                          length: 0.5,
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
                      </figure>
                    </TransitionLink>
                    <h4>{index + 1} - {post.frontmatter.client}</h4>
                  </section>
                <section className="case-study-item-info">
                  <h3 className="typography-headline">{post.frontmatter.title}</h3>
                  <p className="typography-excerpt">{post.excerpt}</p>
                </section>
              </article>
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
};

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
                client
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
