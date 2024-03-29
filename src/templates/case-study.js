import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Layout from '../components/CaseStudyLayout'
import Video from '../components/Video'
//import Img from 'gatsby-image'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import {TimelineMax, Power1} from "gsap";
import TransitionLink from "gatsby-plugin-transition-link"
import closeIcon from '../img/close-icon.svg'

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
                        <h1 className="typography-headline">
                            <span className="headline-content">{title}</span>
                            <span className="typography-headline wraparound-text">{title}</span>
                        </h1>
                        <h2 className="typography-caption">{client}</h2>
                        <figure className="case-study-featured-img"
                                style={{
                                    backgroundImage: `url(${featuredImage})`,
                                    backgroundPosition: `center center`,
                                    backgroundSize: `cover`,
                                }}
                        >        
                        </figure>
                    </header>
                    <section>
                        <div className="case-study-content-wrapper">
                            {tags && tags.length ? (
                                <ul className="taglist col-3 col-12-sm">
                                    {tags.map(tag => (
                                        <li key={tag + `tag`}>{tag}</li>
                                    ))}
                                </ul>
                            ) : null}
                            <PostContent content={content} className="col-9 col-12-sm case-study-content"/>
                        </div>
                        <div className={`image-grid-container col-12 ${main.row1.rowLayout}`}>
                            {main.row1.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row1.image1} />
                            </div>
                            )}
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
                            {main.row1.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row1.video1} />
                            </div>
                            )}
                        </div> 
                        {main.row2 && (
                        <div className={`image-grid-container col-12 ${main.row2.rowLayout}`}>
                            {main.row2.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row2.image1} />
                            </div>
                            )}
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
                            {main.row2.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row2.video1} />
                            </div>
                            )}
                        </div>
                        )}
                        {main.row3 && (
                        <div className={`image-grid-container col-12 ${main.row3.rowLayout}`}>
                            {main.row3.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row3.image1} />
                            </div>
                            )}
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
                            {main.row3.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row3.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row4 && (
                        <div className={`image-grid-container col-12 ${main.row4.rowLayout}`}>
                            {main.row4.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row4.image1} />
                            </div>
                            )}
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
                            {main.row4.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row4.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row5 && (
                        <div className={`image-grid-container col-12 ${main.row5.rowLayout}`}>
                            {main.row5.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row5.image1} />
                            </div>
                            )}
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
                            {main.row5.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row5.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row6 && (
                        <div className={`image-grid-container col-12 ${main.row6.rowLayout}`}>
                            {main.row6.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row6.image1} />
                            </div>
                            )}
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
                            {main.row6.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row6.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row7 && (
                        <div className={`image-grid-container col-12 ${main.row7.rowLayout}`}>
                            {main.row7.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row7.image1} />
                            </div>
                            )}
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
                            {main.row7.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row7.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row8 && (
                        <div className={`image-grid-container col-12 ${main.row8.rowLayout}`}>
                            {main.row8.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row8.image1} />
                            </div>
                            )}
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
                            {main.row8.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row8.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row9 && (
                        <div className={`image-grid-container col-12 ${main.row9.rowLayout}`}>
                            {main.row9.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row9.image1} />
                            </div>
                            )}
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
                            {main.row9.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row9.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row10 && (
                        <div className={`image-grid-container col-12 ${main.row10.rowLayout}`}>
                            {main.row10.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row10.image1} />
                            </div>
                            )}
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
                            {main.row10.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row10.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row11 && (
                        <div className={`image-grid-container col-12 ${main.row11.rowLayout}`}>
                            {main.row11.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row11.image1} />
                            </div>
                            )}
                            {main.row11.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row11.image2} />
                            </div>
                            )}
                            {main.row11.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row11.image3} />
                            </div>
                            )}
                            {main.row11.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row11.video1} />
                            </div>
                            )}                            
                        </div>
                        )}
                        {main.row12 && (
                        <div className={`image-grid-container col-12 ${main.row12.rowLayout}`}>
                            {main.row12.image1 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row12.image1} />
                            </div>
                            )}
                            {main.row12.image2 && (
                            <div className="image-grid-tile">
                                <PreviewCompatibleImage imageInfo={main.row12.image2} />
                            </div>
                            )}
                            {main.row12.image3 && (
                            <div className="image-grid-tile">
                               <PreviewCompatibleImage imageInfo={main.row12.image3} />
                            </div>
                            )}
                            {main.row12.video1 && (        
                            <div className="image-grid-tile video-tile">    
                                <Video videoSrcURL={main.row12.video1} />
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
            .to(node.querySelector('.case-study-content'), .5, {y: '100vw', ease: Power1.easeInOut,})
    }

    function fadePageIn(entry, node) {
        return new TimelineMax()
            .set(node.querySelector('.home-page-content'), { opacity: 0})
            .to(node.querySelector('.home-page-content'), .75, { opacity: 1, ease: Power1.easeInOut,})
    }

    function slideCaseStudyFromLeft(entry, node) {
        return new TimelineMax()
            .set(node.querySelector('.case-study-content'), {x: '100vh'})
            .to(node.querySelector('.case-study-content'), .5, {x: '0', ease: Power1.easeInOut,})
    }

    function slideCaseStudyToLeft(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study-content'), .5, {x: '-100vw', ease: Power1.easeInOut,})
    }

    function slideCaseStudyFromRight(entry, node) {
        return new TimelineMax()
            .set(node.querySelector('.case-study-content'), {x: '-100vh'})
            .to(node.querySelector('.case-study-content'), .5, {x: '0', ease: Power1.easeInOut,})
    }

    function slideCaseStudyToRight(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study-content'), .5, {x: '100vw', ease: Power1.easeInOut,})
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
                        <div>
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
                                        <img src={closeIcon} alt="Pawn Creative" style={{ width: '88px' }} />
                                        <p className="visuallyhidden">Back to home</p>
                                    </div>
                                </div>
                            </TransitionLink>
                        </div>
                }
                client={post.frontmatter.client}
                title={post.frontmatter.title}
                nav={
                    <ul className="pagination-nav">
                        <li className="col-3 col-12-sm previous-page">
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
                                    <div className="nav-content">
                                        <div className="typography-subhead">Previous</div>
                                        <div>{previous.frontmatter.title}</div>
                                    </div>
                                </TransitionLink>
                            )}
                        </li>
                        <li className="col-6 col-12-sm modal-close-nav">
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
                                        <img src={closeIcon} alt="Pawn Creative" style={{ width: '88px' }} />
                                        <p className="visuallyhidden">Back to home</p>
                                    </div>
                                    <p>Close</p>
                                </div>
                            </TransitionLink>
                        </li>
                        <li className="col-3 col-12-sm next-page">
                            {next.frontmatter.templateKey === 'case-study' && (
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
                                    <div className="nav-content">
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
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row2 {
            rowLayout
            image1 {
               childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1  
          }
          row3 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row4 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row5 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row6 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row7 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row8 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row9 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row10 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row11 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }
          row12 {
            rowLayout
            image1 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image2 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            image3 {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
              publicURL
            }
            video1
          }                                             
        }
      }
    }
  }
`
