import React, { Component } from 'react'
import { gridDiv, linkDiv, headerText, linkText } from '../../styles/desktopNavbar';

export default class DesktopNavbar extends Component {
    render() {
        return (
            <nav className={gridDiv}>
                <div>
                    <p className={headerText}>Employee Directory App</p>
                </div>
                <div className={linkDiv}>
                    <p className={linkText}>Home</p>
                    <p className={linkText}>Sign Up</p>
                    <p className={linkText}>Log In</p>
                </div>
            </nav>
        )
    }
}
