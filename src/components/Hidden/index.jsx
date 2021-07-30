import React from "react";
import { Hidden } from "./style";

const HiddenComponent = (props) => {
  return <Hidden {...props}>{props.children}</Hidden>;
};

export default HiddenComponent;
