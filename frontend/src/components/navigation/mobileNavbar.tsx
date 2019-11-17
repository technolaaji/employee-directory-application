import React, { Component } from 'react'
import { gridDiv, headerText, burgerDiv, dropdownDiv, linkText } from '../../styles/mobileNavbar';
import {UnmountClosed} from 'react-collapse';

export default class MobileNavbar extends Component {

    state = {
        open: false
    }

    trigger = () => {
        this.setState({open: !this.state.open})
    }

    render() {
        return (
            <React.Fragment>
                <nav className={gridDiv}>
                <div>
                    <p className={headerText}>Employee Directory App</p>
                </div>
                <div className={burgerDiv}>
                    <i onClick={this.trigger} className="fa fa-bars"></i>
                </div>
            </nav>
            <UnmountClosed isOpened={this.state.open}>
                    <div className={dropdownDiv}>
                    <p className={linkText}>Home</p>
                    <p className={linkText}>Sign Up</p>
                    <p className={linkText}>Log In</p>
                    </div>
            </UnmountClosed>
            </React.Fragment>
        )
    }
}
