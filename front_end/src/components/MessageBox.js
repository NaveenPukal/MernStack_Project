import { Alert } from "bootstrap";
import React from "react";

function MessageBox(props) {
  return <Alert varient={props.varient || "info"}>{props.children}</Alert>;
}

export default MessageBox;
