import React from "react";
import { Grid } from "./style";

const GridComponent = (props) => {
  return (
    <Grid length={props.children.length} {...props}>
      {props.children}
    </Grid>
  );
};

export default GridComponent;
