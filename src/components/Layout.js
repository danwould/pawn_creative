import React from 'react'
import { Helmet } from 'react-helmet'
//import { createGlobalStyle } from "styled-components";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../scss/main.scss'
import useSiteMetadata from './SiteMetadata'

// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: 'noto_monoregular';
//     src: url('fonts/NotoMono-Regular-webfont.woff') format('woff');
//     src: url('fonts/NotoMono-Regular-webfont.eot?#iefix') format('embedded-opentype'),
//     url('fonts/NotoMono-Regular-webfont.eot'),
//     url('fonts/NotoMono-Regular-webfont.ttf') format('truetype'),
//     url('fonts/NotoMono-Regular-webfont.svg#noto_monoregular') format('svg');
//     font-weight: normal;
//     font-style: normal;
//     font-display: fallback;
//   }

//   @font-face {
//     font-family: 'IntegralCF-DemiBold';
//     src: url('fonts/integral-cf-demi-bold.woff2') format('woff2');
//     src: url('fonts/integral-cf-demi-bold.eot?#iefix') format('embedded-opentype'),
//            url('fonts/integral-cf-demi-bold.eot'),
//          url('fonts/integral-cf-demi-bold.woff') format('woff'),
//          url('fonts/integral-cf-demi-bold.ttf') format('truetype'),
//          url('fonts/integral-cf-demi-bold.svg#youworkforthem') format('svg');
//     font-weight: normal;
//     font-style: normal;
//     font-display: fallback;
//   }
//   body {
//     margin: 0;
//     font-family: 'noto_monoregular', sans-serif;
//   }
//   h1, h2, h3 {
//     font-family: 'IntegralCF-DemiBold', serif;
//   }
//   .title {
//     font-family: 'noto_monoregular', sans-serif;
//     font-weight: normal;
//   }
// `;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

    if (typeof window !== "undefined") {
        // eslint-disable-next-line global-require
        require("smooth-scroll")('a[href*="#"]')
    }

    return (
    <div className="page-content">
    <link rel="stylesheet" type="text/css" href="../../fonts.css" />
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

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default TemplateWrapper

