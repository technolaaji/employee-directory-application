import React, { Component } from 'react'
import DesktopNavbar from './desktopNavbar'
import MobileNavbar from './mobileNavbar'
import Media from 'react-media';

export default class Navbar extends Component {
    render() {
        return (
            <Media queries={{ small: "(max-width: 899px)" }}>
          {matches =>
            matches.small ? (
              <MobileNavbar />
            ) : (
             <DesktopNavbar />
            )
          }
        </Media>
        )
    }
}
