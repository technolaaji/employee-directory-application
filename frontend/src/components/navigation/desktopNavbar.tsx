import React, { Component } from 'react'
import { gridDiv, linkDiv, headerText, linkText } from '../../styles/desktopNavbar';
import { checkAuth, deleteToken } from '../../util/authentication';

export default class DesktopNavbar extends Component {
    render() {
        return (
            <nav className={gridDiv}>
                <div>
                    <p className={headerText}>Employee Directory App</p>
                </div>
                <div className={linkDiv}>
                    <p className={linkText}>Home</p>
                    {
                        checkAuth() ? <p className={linkText}>My Account</p> : <p className={linkText}>Sign Up</p>
                    }
                    {
                        checkAuth() ? <p onClick={deleteToken} className={linkText}>Log out</p> : <p className={linkText}>Log In</p>
                    }
                </div>
            </nav>
        )
    }
}
