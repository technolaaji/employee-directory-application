import React, { Component } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import {
  signDiv,
  formDiv,
  formSection,
  header,
  label,
  input,
  button
} from "../styles/signupStyle";
import { withAlert, AlertManager } from "react-alert";
import { postRequest } from "../util/api";
import { createToken } from "../util/authentication";

class Login extends Component<RouteComponentProps, AlertManager> {
  state = {
    email: "",
    password: ""
  };
  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    postRequest("/auth/validate", {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        createToken(response.data.token);
        navigate("/");
        window.location.reload();
      })
      .catch(() => {
        this.props.alert.show("Kindly provide the right information");
      });
  };
  render() {
    return (
      <div className={signDiv}>
        <div className={formDiv}>
          <h1 className={header}>Log in</h1>
          <form className={formSection} onSubmit={this.onSubmit}>
            <label className={label}>Email</label>
            <input
              value={this.state.email}
              onChange={this.onValueChange}
              name="email"
              type="email"
              className={input}
            />
            <label className={label}>Password</label>
            <input
              value={this.state.password}
              onChange={this.onValueChange}
              name="password"
              type="password"
              className={input}
            />

            <button className={button}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAlert()(Login);
