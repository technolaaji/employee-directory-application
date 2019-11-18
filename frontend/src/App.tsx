import React, { Component } from "react";
import Navbar from "./components/navigation/Navbar";
import { Router } from "@reach/router";
import Frontpage from "./components/Frontpage";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Frontpage />
      </div>
    );
  }
}
