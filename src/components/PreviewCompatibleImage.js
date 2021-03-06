import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '0' }
  const {childImageSharp, image, publicURL } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt="Case Study"/>
    )
  }

  if (!!childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt="Case Study"/>
  }

  if (!childImageSharp) {
    return <div className="static-img-wrapper"><div className="static-img-placeholder"></div><img style={imageStyle} src={publicURL} alt="Case Study"/></div>
  }


  if (!childImageSharp || !publicURL) {
    return ''
  }

  return <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt="Case Study"/>
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
