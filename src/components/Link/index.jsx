import React from "react";
import { Box } from "./style";
import { Link as LinkGatsby } from "gatsby";

const Link = (props) => {
  if (props.href) {
    return (
      <Box>
        <a {...props} target="_blank" rel="noopener noreferer">
          {props.children}
        </a>
      </Box>
    );
  } else {
    return (
      <Box>
        <LinkGatsby {...props}>{props.children}</LinkGatsby>
      </Box>
    );
  }
};

export default Link;
