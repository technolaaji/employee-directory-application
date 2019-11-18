import React, { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import { Router } from "@reach/router";
import Frontpage from "./components/Frontpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFoundPage";
import MyAccountHolder from "./components/MyAccountHolder";
import EmployeeForm from "./components/EmployeeForm";
import CompanyForm from "./components/CompanyForm";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Frontpage path="/" />
          <Signup path="/signup" />
          <Login path="/login" />
          <NotFound default />
          <MyAccountHolder path="/myaccount">
            <EmployeeForm path="/employee" />
            <CompanyForm path="/company" />
          </MyAccountHolder>
        </Router>
      </div>
    );
  }
}
