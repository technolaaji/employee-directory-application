import React, { Component } from 'react';
import {
    gridDiv,
    linkDiv,
    headerText,
    linkText,
} from '../../styles/desktopNavbar';
import { checkAuth, deleteToken } from '../../util/authentication';
import { navigate } from '@reach/router';

export default class DesktopNavbar extends Component {
    render() {
        return (
            <nav className={gridDiv}>
                <div>
                    <p className={headerText}>Employee Directory App</p>
                </div>
                <div className={linkDiv}>
                    <p onClick={() => navigate('/')} className={linkText}>
                        Home
                    </p>
                    {checkAuth() ? (
                        <p
                            onClick={() => navigate('/myaccount/employee')}
                            className={linkText}
                        >
                            My Account
                        </p>
                    ) : (
                        <p
                            onClick={() => navigate('/signup')}
                            className={linkText}
                        >
                            Sign Up
                        </p>
                    )}
                    {checkAuth() ? (
                        <p onClick={deleteToken} className={linkText}>
                            Log out
                        </p>
                    ) : (
                        <p
                            onClick={() => navigate('/login')}
                            className={linkText}
                        >
                            Log In
                        </p>
                    )}
                </div>
            </nav>
        );
    }
}
