import React, { Component } from "react";
import { RouteComponentProps } from "@reach/router";
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

class Signup extends Component<RouteComponentProps, AlertManager> {
  state = {
    email: "",
    password: "",
    retype_password: ""
  };
  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.email !== "" &&
      this.state.password === this.state.retype_password
    ) {
      postRequest("/auth/create", {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          if (response.data.name === "MongoError") {
            this.props.alert.show("Have you tried to log in than signing up?");
          } else
            this.props.alert.show(
              "User is created successfully, you can now log in to your account"
            );
        })
        .catch(() => {
          this.props.alert.show("An error occurred, please try again later");
        });
    } else {
      this.props.alert.show(
        "kindly provide all of the required information properly"
      );
    }
  };

  render() {
    return (
      <div className={signDiv}>
        <div className={formDiv}>
          <h1 className={header}>Sign up</h1>
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
            <label className={label}>Retype Password</label>
            <input
              value={this.state.retype_password}
              onChange={this.onValueChange}
              name="retype_password"
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

export default withAlert()(Signup);
