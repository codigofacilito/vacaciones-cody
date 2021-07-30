import React from "react";
import { Grid } from "./style";

const GridComponent = ({ children }) => {
  return <Grid length={children.length}>{children}</Grid>;
};

export default GridComponent;
