import React from 'react'
import PropTypes from 'prop-types'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, getAsset }) => (
  <CaseStudyTemplate
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    client={entry.getIn(['data', 'client'])}
    featuredimage={getAsset(entry.getIn(['data', 'featuredimage', 'image']))}    
    image1={{
      image: getAsset(entry.getIn(['data', 'image1', 'image'])),
      alt: entry.getIn(['data', 'image1', 'alt']),
    }}
    image2={{
      image: getAsset(entry.getIn(['data', 'image2', 'image'])),
      alt: entry.getIn(['data', 'image2', 'alt']),
    }}
    image3={{
      image: getAsset(entry.getIn(['data', 'image3', 'image'])),
      alt: entry.getIn(['data', 'image3', 'alt']),
    }}
    image4={{
      image: getAsset(entry.getIn(['data', 'image4', 'image'])),
      alt: entry.getIn(['data', 'image4', 'alt']),
    }}           
  />
);

CaseStudyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default CaseStudyPreview
