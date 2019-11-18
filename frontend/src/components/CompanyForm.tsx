import React, { Component } from "react";
import {
  formDiv,
  formCont,
  header,
  formSection,
  label,
  input,
  button
} from "../styles/employeeForm";
import { postRequest } from "../util/api";
import { withAlert, AlertManager } from "react-alert";

class CompanyForm extends Component {
  state = {
    name: "",
    location: "",
    country: "",
    phone: ""
  };

  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    postRequest("/private/company/create", this.state)
      .then(() => {
        this.props.alert.show("Employee added successfully");
      })
      .catch(() => {
        this.props.alert.show(
          "Something wrong happened, please try again later"
        );
      });
  };

  render() {
    return (
      <div className={formDiv}>
        <div className={formCont}>
          <h1 className={header}>Company creation</h1>
          <form className={formSection} onSubmit={this.onSubmit}>
            <label className={label}>Name</label>
            <input
              value={this.state.name}
              onChange={this.onValueChange}
              name="name"
              type="text"
              className={input}
            />
            <label className={label}>Location</label>
            <input
              value={this.state.location}
              onChange={this.onValueChange}
              name="location"
              type="text"
              className={input}
            />
            <label className={label}>Phone</label>
            <input
              value={this.state.phone}
              onChange={this.onValueChange}
              name="phone"
              type="text"
              className={input}
            />
            <label className={label}>Country</label>
            <input
              value={this.state.country}
              onChange={this.onValueChange}
              name="country"
              type="text"
              className={input}
            />
            <button className={button}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withAlert()(CompanyForm);
