import React from 'react'

const Navbar = class extends React.Component {

  render() {
    return (
      <li>
        <a
          data-index-number={this.props.index}
          className={ this.props.isActive ? 'is-active': '' } 
          href={ this.props.url }
          onClick={ this.props.onActiveTab }>
            { this.props.content }
        </a>
      </li>
    )
  }
}

export default Navbar
