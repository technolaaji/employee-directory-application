import React from "react";
import { notfoundDiv, notfoundText } from "../styles/notFoundStyle";
import { RouteComponentProps } from "@reach/router";

export default function NotFoundPage(): RouteComponentProps {
  return (
    <div className={notfoundDiv}>
      <p className={notfoundText}>yeah this page doesn't exist </p>
    </div>
  );
}
