import React from "react";
import { cardDiv, imageSection } from "../styles/employeeCardStyle";

export default function EmployeeCard(props: {
  first: string;
  middle: string;
  last: string;
  location: string;
  job: string
  image: string;
}) {
  return (
    <div className={cardDiv}>
      <img src={props.image} className={imageSection} alt="" />
      <h1>
        {props.first} {props.middle} {props.last}
      </h1>
      <p>{props.job}</p>
      <p>
        {props.location} 
      </p>
    </div>
  );
}
