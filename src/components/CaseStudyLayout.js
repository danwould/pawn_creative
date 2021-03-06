import React from 'react'
import { Helmet } from 'react-helmet'
import '../scss/main.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    return (
    <div className="page-content case-study-content">
      <Helmet>
        <html lang="en" />
        <link 
          rel="stylesheet"
          type="text/css"
          href="../../fonts.css" 
        />

        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      
      <main>{children}</main>
    </div>
  )
}

export default TemplateWrapper

