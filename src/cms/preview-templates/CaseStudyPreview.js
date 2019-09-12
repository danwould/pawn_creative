import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry }) => (
  <CaseStudyTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    client={entry.getIn(['data', 'client'])}
    featuredimage={entry.getAsset(entry.getIn(['data', 'featuredimage', 'image']))}    
    image1={entry.getAsset(entry.getIn(['data', 'image1', 'image']))}
    image2={entry.getAsset(entry.getIn(['data', 'image2', 'image']))}
    image3={entry.getAsset(entry.getIn(['data', 'image3', 'image']))}
    image4={entry.getAsset(entry.getIn(['data', 'image4', 'image']))}           
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CaseStudyPreview
