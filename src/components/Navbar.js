import React from 'react'
import { Link } from 'gatsby'
import NavItem from '../components/NavBarItem'
import SocialNavBar from '../components/SocialNavBar'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      selectedTabId: "1"
    };

    this._handleScroll = this._handleScroll.bind(this);
  };
  
  isActive(index) {
    return this.state.selectedTabId === index;
  }
  
  setActiveTab(selectedTabId) {
    this.setState({ selectedTabId });
  }

  _handleScroll(e) {

    let topHome = document.documentElement.querySelector('#home');
    let topWork = document.documentElement.querySelector('#work');
    let topContact = document.documentElement.querySelector('#contact');

    const offset = 200;
    const offset1 = -300;

    if (topHome.getBoundingClientRect().top > offset1) {
      this.setState({ selectedTabId: "1" });
    } 
    if (topWork.getBoundingClientRect().top < offset) {
      this.setState({ selectedTabId: "2" });
    } 
    if (topContact.getBoundingClientRect().top < offset) {
      this.setState({ selectedTabId: "3" });      
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleScroll);
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
          </div>
          <div
            id="navMenu"
            className="main-nav-menu"
          >
            <ul className="navbar-start has-text-centered" onScroll={this._handleScroll}>
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
              <NavItem url="#contact"
                       content="Contact"
                       index="3" 
                       isActive={ this.isActive("3") } 
                       onActiveTab={ this.setActiveTab.bind(this, "3") }
              />
            </ul>
            <SocialNavBar />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
