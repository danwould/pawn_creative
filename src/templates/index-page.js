import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CaseStudyRoll from '../components/CaseStudyRoll'

export const IndexPageTemplate = ({
  image,
  title,
  subheading,
  intro,
  manifesto,
}) => (
  <React.Fragment>
    <header
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
        <h1>
          {title}
        </h1>
        <h2>
          {subheading}
        </h2>
    </header>
    <section className="section">
      <h2 className="title">{intro.title}</h2>
      <p className="subtitle">{intro.description}</p>
    </section>
      <section className="section">
          <h2 className="title">{manifesto.title}</h2>
          <p className="subtitle">{manifesto.description}</p>
      </section>
    <section className="section">
       <CaseStudyRoll />
    </section>
  </React.Fragment>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  manifesto: PropTypes.object,
  intro: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        intro={frontmatter.intro}
        manifesto={frontmatter.manifesto}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        manifesto {
          title
          description
        }
        intro {
          title
          description
        }
      }
    }
  }
`
