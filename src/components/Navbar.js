import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Pawn Creative" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <ul className="navbar-start has-text-centered">
              <li>
                <Link className="navbar-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="navbar-item" to="/">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Hamburger menu */}
            <div className="navbar-end has-text-centered">
              <ul className="column is-4 social">
                <li>
                <a title="facebook" href="https://facebook.com">
                  <img
                      src={facebook}
                      alt="Facebook"
                      style={{ width: '1em', height: '1em' }}
                  />
                </a>
                </li>
                <li>
                  <a title="twitter" href="https://twitter.com">
                    <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </li>
                <li>
                  <a title="instagram" href="https://instagram.com">
                    <img
                        src={instagram}
                        alt="Instagram"
                        style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </li>
                <li>
                  <a title="vimeo" href="https://vimeo.com">
                    <img
                        src={vimeo}
                        alt="Vimeo"
                        style={{ width: '1em', height: '1em' }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
