import React from "react";
import Hidden from "components/Hidden";
import { Footer } from "./style";

const FooterComponent = () => {
  return (
    <Hidden ondesktop>
      <Footer>HOla mundo</Footer>
    </Hidden>
  );
};

export default FooterComponent;
