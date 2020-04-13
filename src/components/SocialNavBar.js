import React from 'react'
import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";
import vimeo from "../img/social/vimeo.svg";

const SocialNavbar = class extends React.Component {
  render() {
    return (            

            <div className="social-nav-bar navbar-end has-text-centered">
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
    )
  }
}

export default SocialNavbar
