import React, { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import { Router } from "@reach/router";
import Frontpage from "./components/Frontpage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import NotFound from "./components/NotFoundPage";

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
        </Router>
      </div>
    );
  }
}
