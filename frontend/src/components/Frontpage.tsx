import React, { Component } from "react";
import { postRequest } from "../util/api";
import Loader from "./loader";
import SearchBar from "./SearchBar";
import Toggler from "./Toggler";
import SearchResults from "./SearchResults";

export default class Frontpage extends Component {
  state = {
    loading: false,
    data: [],
    search: "",
    count: 10,
    url: "/public/employee/search",
    status: "employee"
  };

  onchanger: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ search: e.target.value });
  };

  fetchResults: Function = () => {
    this.setState({ loading: true }, () => {
      postRequest(this.state.url, {
        search: this.state.search,
        count: this.state.count
      }).then(response => {
        console.log(response.data);
        this.setState({ loading: false, data: response.data });
      });
    });
  };

  statusChanger: Function = (value: string) => {
    if (value === "employee") {
      this.setState({
        status: "employee",
        url: "/public/employee/search",
        data: []
      });
    } else {
      this.setState({
        status: "company",
        url: "/public/company/search",
        data: []
      });
    }
  };

  countChanger: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ count: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchBar
          search={this.state.search}
          changer={this.onchanger}
          submit={this.fetchResults}
        />
        <Toggler
          status={this.state.status}
          statusChange={this.statusChanger}
          countChange={this.countChanger}
          count={this.state.count}
        />
        {this.state.loading ? <Loader /> : null}
        <SearchResults status={this.state.status} data={this.state.data} />
      </div>
    );
  }
}
