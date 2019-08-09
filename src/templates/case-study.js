import React from 'react'
import PropTypes from 'prop-types'
//import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import {TimelineMax, Power1} from "gsap";
import TransitionLink from "gatsby-plugin-transition-link"

export const CaseStudyTemplate = ({
                                      content,
                                      contentComponent,
                                      description,
                                      tags,
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
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                            {title}
                        </h1>
                        <p>{description}</p>
                        <PostContent content={content} />
                        {nav}

                        {tags && tags.length ? (
                            <ul className="taglist">
                              {tags.map(tag => (
                                <li key={tag + `tag`}>{tag}</li>
                              ))}
                            </ul>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

CaseStudyTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
}

const CaseStudy = ({ data, pageContext }) => {
    const { markdownRemark: post } = data
    const { previous, next } = pageContext

    function slideCaseStudyDown(exit, node) {
        return new TimelineMax()
            .to(node.querySelector('.case-study'), .5, {y: '120%', ease: Power1.easeInOut,})
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
        <CaseStudyTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
                <Helmet titleTemplate="%s | Blog">
                    <title>{`${post.frontmatter.title}`}</title>
                    <meta
                        name="description"
                        content={`${post.frontmatter.description}`}
                    />
                </Helmet>
            }
            tags={post.frontmatter.tags}
            close={
                <TransitionLink
                    to="/"
                    exit={{
                        length: 1,
                        trigger: ({ exit, node }) => slideCaseStudyDown(exit, node),
                    }}
                    entry={{
                        length: 2,
                        delay: 0.5,
                        trigger: ({ entry, node }) => fadePageIn(entry, node),
                    }}
                >
                    X
                </TransitionLink>
            }
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
                                length: 2,
                                delay: 0.5,
                                trigger: ({ entry, node }) => fadePageIn(entry, node),
                            }}
                        >
                            X Close
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
        description
        tags
      }
    }
  }
`
