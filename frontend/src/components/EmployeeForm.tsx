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

class EmployeeForm extends Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    jobTitle: "",
    picture: "https://picsum.photos/300/300",
    location: "",
    email: ""
  };

  onValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    postRequest("/private/employee/create", {
      firstName: this.state.firstName,
      middle: this.state.middleName,
      lastName: this.state.lastName,
      jobTitle: this.state.jobTitle,
      picture: this.state.picture,
      location: this.state.location,
      email: this.state.email
    })
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
          <h1 className={header}>Sign up</h1>
          <form className={formSection} onSubmit={this.onSubmit}>
            <label className={label}>First Name</label>
            <input
              value={this.state.firstName}
              onChange={this.onValueChange}
              name="firstName"
              type="text"
              className={input}
            />
            <label className={label}>Middle Name</label>
            <input
              value={this.state.middleName}
              onChange={this.onValueChange}
              name="middleName"
              type="text"
              className={input}
            />
            <label className={label}>Last Name</label>
            <input
              value={this.state.lastName}
              onChange={this.onValueChange}
              name="lastName"
              type="text"
              className={input}
            />
            <label className={label}>Job Title</label>
            <input
              value={this.state.jobTitle}
              onChange={this.onValueChange}
              name="jobTitle"
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
            <label className={label}>Email</label>
            <input
              value={this.state.email}
              onChange={this.onValueChange}
              name="email"
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

export default withAlert()(EmployeeForm);
