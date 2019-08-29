import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import CaseStudyRoll from '../components/CaseStudyRoll'
import isSticky from '../helpers/isSticky'

export const IndexPageTemplate = ({
  image,
  title,
  intro,
  manifesto,
}) => (
  <React.Fragment>
      <div id="home" className="section-hero"
           style={{
               backgroundImage: `url(${
                   !!image.childImageSharp ? image.childImageSharp.fluid.src : image
                   })`,
               backgroundPosition: `top left`,
               backgroundAttachment: `fixed`,
               backgroundSize: `cover`,
           }}
      >
          <header className="section-hero-header section-content">
              <h1>
                  <span className="outline-text">/01</span>
                  <span className="underscore"></span>
                  <span className="headline-content">{title}</span>
              </h1>
          </header>

          <section className="section section-intro section-content">
              <div className="blurbs intro-blurb">
                  <h3 className="title">{intro.title}</h3>
                  <p className="subtitle">{intro.description}</p>
              </div>
              <div className="blurbs manifesto-blurb">
                  <h3 className="title">{manifesto.title}</h3>
                  <p className="subtitle">{manifesto.description}</p>
              </div>
          </section>
      </div>

    <section id="work" className="section section-work sticky-container">
        <h2 className="section-content sticky-events"><span className="outline-text">/02</span> WORK</h2>
        <CaseStudyRoll />
    </section>
  </React.Fragment>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  manifesto: PropTypes.object,
  intro: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  let caseStudyContainer = document.querySelector('.case-studies-container');
  let classToToggle = "fixed";

  isSticky(caseStudyContainer, classToToggle);

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
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

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
`;
