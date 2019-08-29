import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry }) => (
  <CaseStudyTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    client={entry.getIn(['data', 'client'])}
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
};

export default CaseStudyPreview
