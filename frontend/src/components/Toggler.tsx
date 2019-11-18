import React from "react";
import {
  toggleDiv,
  inputTag,
  toggleButton,
  toggleButtonSelected
} from "../styles/togglerStyle";

export default function Toggler(props: {
  status: string;
  statusChange: any;
  countChange: any;
  count: number;
}) {
  return (
    <div className={toggleDiv}>
      <button
        onClick={() => props.statusChange("employee")}
        className={
          props.status === "employee" ? toggleButtonSelected : toggleButton
        }
      >
        Employee
      </button>
      <button
        onClick={() => props.statusChange("company")}
        className={
          props.status === "company" ? toggleButtonSelected : toggleButton
        }
      >
        Company
      </button>
      <input
        value={props.count}
        onChange={props.countChange}
        className={inputTag}
        placeholder="Count: 10"
      />
    </div>
  );
}
