import React from "react"

const Video = ({ videoSrcURL, ...props }) => (
  <div className="video-wrapper">
    <iframe
      src={videoSrcURL}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      title="Case Study Video"
      allowFullScreen
    />
  </div>
)
export default Video