import React from 'react'
import { Link } from 'gatsby'
import NavItem from '../components/NavBarItem'
import logo from '../img/logo.svg'
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";


const Navbar = class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedTabId: 1
    };
  };
  
  isActive(index) {
    console.log(index)
    return this.state.selectedTabId === index;
  }
  
  setActiveTab(selectedTabId) {
    console.log(selectedTabId)
    this.setState({ selectedTabId });
  }

  render() {
    return (
      <nav
        className="main-nav"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="nav-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Pawn Creative" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger`}
              data-target="navMenu"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className="main-nav-menu"
          >
            <ul className="navbar-start has-text-centered">
              <NavItem url="#home" 
                       content="Home"
                       index="1"
                       isActive={ this.isActive("1") } 
                       onActiveTab={ this.setActiveTab.bind(this, "1") }
              />
              <NavItem url="#work"
                       content="Gallery"
                       index="2"
                       isActive={ this.isActive("2") } 
                       onActiveTab={ this.setActiveTab.bind(this, "2") }
              />
              <NavItem url="#home"
                       content="Contact"
                       index="3" 
                       isActive={ this.isActive("3") } 
                       onActiveTab={ this.setActiveTab.bind(this, "3") }
              />
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
