import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from "styled-components";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../scss/main.scss'
import useSiteMetadata from './SiteMetadata'

const GlobalStyle = createGlobalStyle`
  @import url('fonts/NotoMono-Regular-webfont.woff');
  @import url('fonts/integral-cf-demi-bold.woff2');
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'noto_monoregular', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'IntegralCF-DemiBold', serif;
  }
`;

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
        <link 
          rel="preload"
          as="style"
          href="fonts.css"
        />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

