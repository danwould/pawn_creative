import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import {TimelineMax, Power1} from "gsap";
import TransitionLink from "gatsby-plugin-transition-link"

export const CaseStudyTemplate = ({
                                      content,
                                      contentComponent,
                                      featuredImage,
                                      image1,
                                      image2,
                                      image3,
                                      image4,
                                      tags,
                                      client,
                                      title,
                                      helmet,
                                      nav,
                                      close,
                                  }) => {
    const PostContent = contentComponent || Content

    return (
        <section className={`section section-case-study + ${title}`}>
            {helmet || ''}
            <div className="container content case-study">
                {close}
                <article className="columns">
                    <header className="case-study-header">
                        <h1>{title}</h1>
                        <h2 className="typography-caption">{client}</h2>
                        <figure className="case-study-featured-img">
                            <Img fluid={featuredImage} alt={"test"} />
                        </figure>
                    </header>
                    <section>
                        {tags && tags.length ? (
                            <ul className="taglist">
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>{tag}</li>
                                ))}
                            </ul>
                        ) : null}
                        <PostContent content={content} />
                        <div className="image-grid-container">
                            <div className="col-12 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={image1} />
                            </div >
                            <div className="col-6 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={image2} />
                            </div>
                            <div className="col-6 image-grid-tile">
                               <PreviewCompatibleImage imageInfo={image3} />
                            </div>
                            <div className="col-12 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={image4} />
                            </div>
                        </div>
                    </section>
                    {nav}
                </article>
            </div>
        </section>
    )
}

CaseStudyTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    client: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const CaseStudy = ({ data, pageContext }) => {
    const { markdownRemark: post } = data
    const { previous, next } = pageContext

    function slideCaseStudyDown(exit, node) {
        console.log("aljoshd");

        return new TimelineMax()
            .to(node.querySelector('.case-study'), .5, {y: '100%', ease: Power1.easeInOut,})
    }

    function fadePageIn(entry, node) {
        console.log("yeet");

        return new TimelineMax()
            .set(node.querySelector('.page-content'), { opacity: 0})
            .to(node.querySelector('.page-content'), .5, { opacity: 1, ease: Power1.easeInOut,})
    }

    function slideCaseStudyFromLeft(entry, node) {
        return new TimelineMax()
            .set(node.querySelector('.case-study'), {x: '100%'})
            .to(node.querySelector('.case-study'), .5, {x: '0%', ease: Power1.easeInOut,})
    }

    function slideCaseStudyToLeft(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study'), .5, {x: '-100%', ease: Power1.easeInOut,})
    }

    function slideCaseStudyFromRight(entry, node) {
        return new TimelineMax()
            .set(node.querySelector('.case-study'), {x: '-100%'})
            .to(node.querySelector('.case-study'), .5, {x: '0%', ease: Power1.easeInOut,})
    }

    function slideCaseStudyToRight(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study'), .5, {x: '100%', ease: Power1.easeInOut,})
    }


    return (
        <CaseStudyTemplate
            content={post.html}
            helmet={
                <Helmet titleTemplate="%s | Blog">
                    <title>{`${post.frontmatter.title}`}</title>
                    <meta
                        name="description"
                        content={`${post.frontmatter.description}`}
                    />
                </Helmet>
            }
            featuredImage={post.frontmatter.featuredimage.childImageSharp.fluid}
            tags={post.frontmatter.tags}
            contentComponent={HTMLContent}
            image1={post.frontmatter.image1}
            image2={post.frontmatter.image2}
            image3={post.frontmatter.image3}
            image4={post.frontmatter.image4}
            close={
                <TransitionLink
                    to="/"
                    exit={{
                        length: 0.25,
                        trigger: ({ exit, node }) => slideCaseStudyDown(exit, node),
                    }}
                    entry={{
                        length: 0.5,
                        delay: 0.5,
                        trigger: ({ entry, node }) => fadePageIn(entry, node),
                    }}
                >
                    <div className="modal-close-container">
                        <div className="modal-close-icon">
                            <p className="visuallyhidden">Back to home</p>
                        </div>
                    </div>
                </TransitionLink>
            }
            client={post.frontmatter.client}
            title={post.frontmatter.title}
            nav={
                <ul>
                    {previous && (
                        <li>
                            <TransitionLink
                                to={previous.fields.slug}
                                rel="prev"
                                exit={{
                                    length: 1,
                                    trigger: ({ exit, node }) => slideCaseStudyToRight(exit, node),
                                }}
                                entry={{
                                    delay: 0.5,
                                    trigger: ({ entry, node }) => slideCaseStudyFromRight(entry, node),
                                }}
                            >
                                ← Previous {previous.frontmatter.title}
                            </TransitionLink>
                        </li>
                    )}
                    <li>
                        <TransitionLink
                            to="/"
                            exit={{
                                length: 1,
                                trigger: ({ exit, node }) => slideCaseStudyDown(exit, node),
                            }}
                            entry={{
                                length: 0.5,
                                delay: 0.5,
                                trigger: ({ entry, node }) => fadePageIn(entry, node),
                            }}
                        >
                            <div className="modal-close-container">
                                <div className="modal-close-icon">
                                    <p className="visuallyhidden">Back to home</p>
                                </div>
                            </div>
                        </TransitionLink>
                    </li>
                    {next.frontmatter.templateKey === 'case-study' && (
                        <li>
                            <TransitionLink
                                to={next.fields.slug}
                                rel="next"
                                exit={{
                                    length: 1,
                                    trigger: ({ exit, node }) => slideCaseStudyToLeft(exit, node),
                                }}
                                entry={{
                                    delay: 0.5,
                                    trigger: ({ entry, node }) => slideCaseStudyFromLeft(entry, node),
                                }}
                            >
                                Next {next.frontmatter.title} →
                            </TransitionLink>
                        </li>
                    )}
                </ul>
            }
        />
    )
}

CaseStudy.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
        childImageSharp: PropTypes.object,
    }),
}

export default CaseStudy

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        tags
        client
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
        image1 {
          alt
          image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
          }
        }
        image2 {
          alt
          image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
          }
        }
        image3 {
          alt
          image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
          }
        }
        image4 {
          alt
          image {
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
`
