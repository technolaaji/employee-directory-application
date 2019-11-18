import React, { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import { Router } from "@reach/router";
import Frontpage from "./components/Frontpage";
import Signup from "./components/Signup";
import Login from "./components/Login";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router>
          <Frontpage path="/" />
          <Signup path="/signup" />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
}
