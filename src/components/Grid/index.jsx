import React from "react";
import { Grid } from "./style";

const GridComponent = ({ children }) => {
  return <Grid alv={children.length}>{children}</Grid>;
};

export default GridComponent;
