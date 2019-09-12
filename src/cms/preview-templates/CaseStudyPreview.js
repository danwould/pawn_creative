import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry }) => (
  <CaseStudyTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    client={entry.getIn(['data', 'client'])}
    image1={entry.getIn(['data', 'image1'])}
    image2={entry.getIn(['data', 'image2'])}
    image3={entry.getIn(['data', 'image3'])}
    image4={entry.getIn(['data', 'image4'])}
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default CaseStudyPreview
