import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Layout from '../components/CaseStudyLayout'
//import Img from 'gatsby-image'
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
                        <figure className="case-study-featured-img"
                                style={{
                                    backgroundImage: `url(${featuredImage})`,
                                    backgroundPosition: `top left`,
                                    backgroundSize: `cover`,
                                }}
                        >        
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
                        <div className={`image-grid-container col-12 ${main.row1.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row1.image1} />
                            </div>
                            {main.row1.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row1.image2} />
                            </div>
                            )}
                            {main.row1.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row1.image3} />
                            </div>
                            )}
                        </div> 
                        {main.row2 && (
                        <div className={`image-grid-container col-12 ${main.row2.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row2.image1} />
                            </div>
                            {main.row2.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row2.image2} />
                            </div>
                            )}
                            {main.row2.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row2.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row3 && (
                        <div className={`image-grid-container col-12 ${main.row3.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row3.image1} />
                            </div>
                            {main.row3.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row3.image2} />
                            </div>
                            )}
                            {main.row3.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row3.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row4 && (
                        <div className={`image-grid-container col-12 ${main.row4.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row4.image1} />
                            </div>
                            {main.row4.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row4.image2} />
                            </div>
                            )}
                            {main.row4.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row4.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row5 && (
                        <div className={`image-grid-container col-12 ${main.row5.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row5.image1} />
                            </div>
                            {main.row5.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row5.image2} />
                            </div>
                            )}
                            {main.row5.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row5.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row6 && (
                        <div className={`image-grid-container col-12 ${main.row6.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row6.image1} />
                            </div>
                            {main.row6.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row6.image2} />
                            </div>
                            )}
                            {main.row6.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row6.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row7 && (
                        <div className={`image-grid-container col-12 ${main.row7.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row7.image1} />
                            </div>
                            {main.row7.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row7.image2} />
                            </div>
                            )}
                            {main.row7.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row7.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row8 && (
                        <div className={`image-grid-container col-12 ${main.row8.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row8.image1} />
                            </div>
                            {main.row8.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row8.image2} />
                            </div>
                            )}
                            {main.row8.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row8.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row9 && (
                        <div className={`image-grid-container col-12 ${main.row9.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row9.image1} />
                            </div>
                            {main.row9.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row9.image2} />
                            </div>
                            )}
                            {main.row9.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row9.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row10 && (
                        <div className={`image-grid-container col-12 ${main.row10.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row10.image1} />
                            </div>
                            {main.row10.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row10.image2} />
                            </div>
                            )}
                            {main.row10.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row10.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row11 && (
                        <div className={`image-grid-container col-12 ${main.row11.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row11.image1} />
                            </div>
                            {main.row11.image8 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row11.image2} />
                            </div>
                            )}
                            {main.row11.image8 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row11.image3} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row12 && (
                        <div className={`image-grid-container col-12 ${main.row12.rowLayout}`}>
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row12.image1} />
                            </div>
                            {main.row12.image9 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row12.image2} />
                            </div>
                            )}
                            {main.row12.image9 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row12.image3} />
                            </div>
                            )}
                        </div>
                        )}                                                                                     
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
        row1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row8: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row9: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row10: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row11: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        row12: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),                
    }),
}

const CaseStudy = ({ data, pageContext }) => {
    const { markdownRemark: post } = data
    const { previous, next } = pageContext

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
                featuredImage={post.frontmatter.featuredimage.childImageSharp.fluid.src}
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
                        <li className="col-3 previous-page">
                            {previous.frontmatter.templateKey === 'case-study' && (
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
                                                previous.frontmatter.featuredimage.childImageSharp.fluid.src
                                            })`,
                                    }}>
                                    </figure>
                                    <div className="section-content nav-content">
                                        <div className="typography-subhead">Previous</div>
                                        <div>{previous.frontmatter.title}</div>
                                    </div>
                                </TransitionLink>
                            )}
                        </li>
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
                        <li className="col-3 next-page">
                            {next && (
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
                            )}
                        </li>
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
          row1 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row2 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row3 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row4 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row5 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row6 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row7 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row8 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row9 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row10 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row11 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          row12 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
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
