import React, { Fragment, ReactHTMLElement } from "react";
import { RouteComponentProps } from "@reach/router";
import { myAccountDiv, navigation, link } from "../styles/myAccountStyle";
import { navigate } from "@reach/router";

export default function MyAccountHolder(props: {
  children: any;
  path: any;
}): RouteComponentProps {
  return (
    <div className={myAccountDiv}>
      <div className={navigation}>
        <p className={link} onClick={() => navigate("/myaccount/employee")}>
          Employee
        </p>
        <p className={link} onClick={() => navigate("/myaccount/company")}>
          Company
        </p>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
