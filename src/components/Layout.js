import React from 'react'
import { Helmet } from 'react-helmet'
import FontUrl1 from "../fonts/NotoMono-Regular-webfont.woff"
import FontUrl2 from "../fonts/integral-cf-demi-bold.woff2"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../scss/main.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    return (
    <div className="page-content">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="preload"
          as="font"
          href={FontUrl1}
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        <link rel="preload"
          as="font"
          href={FontUrl2}
          type="font/woff2"
          crossOrigin="anonymous"
        />

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
      <div className="font_preload" style={{opacity: 0}}>
          <span style={{ fontFamily: "../fonts/NotoMono-Regular-webfont.woff', Arial, sans-serif;" }}></span>
          <span style={{ fontFamily: "../fonts/integral-cf-demi-bold', Arial, sans-serif;"}}></span>
      </div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
