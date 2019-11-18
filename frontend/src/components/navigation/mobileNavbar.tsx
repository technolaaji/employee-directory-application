import React, { Component } from "react";
import {
  gridDiv,
  headerText,
  burgerDiv,
  dropdownDiv,
  linkText
} from "../../styles/mobileNavbar";
import { checkAuth, deleteToken } from "../../util/authentication";
import { UnmountClosed } from "react-collapse";
import { navigate } from "@reach/router";

export default class MobileNavbar extends Component {
  state = {
    open: false
  };

  trigger = () => {
    this.setState({ open: !this.state.open });
  };

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
            <p onClick={() => navigate("/")} className={linkText}>
              Home
            </p>
            {checkAuth() ? (
              <p
                onClick={() => navigate("/myaccount/employee")}
                className={linkText}
              >
                My Account
              </p>
            ) : (
              <p onClick={() => navigate("/signup")} className={linkText}>
                Sign Up
              </p>
            )}
            {checkAuth() ? (
              <p onClick={deleteToken} className={linkText}>
                Log out
              </p>
            ) : (
              <p onClick={() => navigate("/login")} className={linkText}>
                Log In
              </p>
            )}
          </div>
        </UnmountClosed>
      </React.Fragment>
    );
  }
}
