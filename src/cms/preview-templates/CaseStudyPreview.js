import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, getAsset }) => (
  <CaseStudyTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    client={entry.getIn(['data', 'client'])}
    featuredimage={getAsset(entry.getIn(['data', 'featuredimage', 'image']))}    
    image1={getAsset(entry.getIn(['data', 'image1', 'image']))}
    image2={getAsset(entry.getIn(['data', 'image2', 'image']))}
    image3={getAsset(entry.getIn(['data', 'image3', 'image']))}
    image4={getAsset(entry.getIn(['data', 'image4', 'image']))}           
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CaseStudyPreview
