import React from 'react'
import SocialNavBar from '../components/SocialNavBar'
//import { Link } from 'gatsby'

//import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer section-content">
        <ul>
          <li>BizDev@pawncreative.com</li>
          <li>1998 Road St. Meaball, OH</li>
        </ul>
        <SocialNavBar />
      </footer>
    )
  }
}

export default Footer
