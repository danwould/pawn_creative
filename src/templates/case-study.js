import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Layout from '../components/CaseStudyLayout'
import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import {TimelineMax, Power1} from "gsap";
import TransitionLink from "gatsby-plugin-transition-link"

export const CaseStudyTemplate = ({
                                      content,
                                      contentComponent,
                                      featuredImage,
                                      main,
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
                    <section className="case-study-content-wrapper">
                        {tags && tags.length ? (
                            <ul className="taglist col-3">
                                {tags.map(tag => (
                                    <li key={tag + `tag`}>{tag}</li>
                                ))}
                            </ul>
                        ) : null}
                        <PostContent content={content} className="col-9 case-study-content"/>
                        <div className="image-grid-container col-12">
                            <div className="col-12 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.image1} />
                            </div>
                            <div className="col-6 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.image2} />
                            </div>
                            <div className="col-6 image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.image3} />
                            </div>
                            <div className="col-12 image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.image4} />
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
    main: PropTypes.shape({
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
}

const CaseStudy = ({ data, pageContext }) => {
    const { markdownRemark: post } = data
    const { previous, next } = pageContext

    console.log(pageContext);

    function slideCaseStudyDown(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study'), .5, {y: '100%', ease: Power1.easeInOut,})
    }

    function fadePageIn(entry, node) {
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
        <Layout>
            <CaseStudyTemplate
                content={post.html}
                helmet={
                    <Helmet titleTemplate="%s | Case Study">
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
                main={post.frontmatter.main}
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
                    <ul className="pagination-nav">
                        {previous && (
                            <li 
                                className="col-3 previous-page"
                            >
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
                                    <figure 
                                        className="nav-image"
                                        style={{
                                            backgroundImage: `url(${
                                                !!previous.frontmatter.featuredimage.childImageSharp ? previous.frontmatter.featuredimage.childImageSharp.fluid.src : previous.frontmatter.featuredimage
                                            })`,
                                    }}>
                                    </figure>
                                    <div className="section-content nav-content">
                                        <div className="typography-subhead">Previous</div>
                                        <div>{previous.frontmatter.title}</div>
                                    </div>
                                </TransitionLink>
                            </li>
                        )}
                        <li className="col-6 modal-close-nav">
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
                                    <p>CLOSE</p>
                                </div>
                            </TransitionLink>
                        </li>
                        {next.frontmatter.templateKey === 'case-study' && (
                            <li 
                                className="col-3 next-page"
                            >
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
                                    <figure 
                                        className="nav-image"
                                        style={{
                                            backgroundImage: `url(${
                                                !!next.frontmatter.featuredimage.childImageSharp ? next.frontmatter.featuredimage.childImageSharp.fluid.src : next.frontmatter.featuredimage
                                            })`,
                                        }}
                                    >
                                    </figure>
                                    <div className="section-content nav-content">
                                        <div className="typography-subhead">Next</div>
                                        <div>{next.frontmatter.title}</div>
                                    </div>
                                </TransitionLink>
                            </li>
                        )}
                    </ul>
                }
            />
        </Layout>
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
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image4 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
