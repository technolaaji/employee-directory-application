import React from "react";
import "../styles/loader.css";
import { loaderDiv } from "../styles/loaderStyle";
export default function Loader() {
  return (
    <div className={loaderDiv}>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
