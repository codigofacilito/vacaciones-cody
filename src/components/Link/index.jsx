import React from "react";
import { Link as LinkGatsby } from "gatsby";

const Link = (props) => {
  if (props.href) {
    return (
      <a {...props} target="_blank" rel="noopener noreferer">
        {props.children}
      </a>
    );
  } else {
    return <LinkGatsby {...props}>{props.children}</LinkGatsby>;
  }
};

export default Link;
