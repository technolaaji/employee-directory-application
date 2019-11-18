import React, { ReactHTML } from "react";
import { searchDiv, inputTag, searchButton } from "../styles/searchBar";

export default function SearchBar(props: {
  search: string;
  changer: any;
  submit: any;
}) {
  return (
    <div className={searchDiv}>
      <input
        className={inputTag}
        value={props.search}
        onChange={props.changer}
        placeholder="Searching for something?"
      />
      <button onClick={props.submit} className={searchButton}>
        Search
      </button>
    </div>
  );
}
