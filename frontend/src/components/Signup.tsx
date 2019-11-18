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
import Loader from "./loader";

class Signup extends Component<RouteComponentProps, AlertManager> {
  state = {
    email: "",
    password: "",
    retype_password: "",
    loading: false
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
      this.setState({ loading: true });
      postRequest("/auth/create", {
        email: this.state.email,
        password: this.state.password
      })
        .then(response => {
          if (response.data.name === "MongoError") {
            this.props.alert.show("Have you tried to log in than signing up?");
            this.setState({ loading: false });
          } else
            this.props.alert.show(
              "User is created successfully, you can now log in to your account"
            );
          this.setState({ loading: false });
        })
        .catch(() => {
          this.props.alert.show("An error occurred, please try again later");
          this.setState({ loading: false });
        });
    } else {
      this.props.alert.show(
        "kindly provide all of the required information properly"
      );
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className={signDiv}>
        {this.state.loading ? <Loader /> : null}
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
