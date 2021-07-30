import React from "react";
import Hidden from "components/Hidden";
import { Footer } from "./style";

const FooterComponent = () => {
  return (
    <Hidden onDesktop>
      <Footer>HOla mundo</Footer>
    </Hidden>
  );
};

export default FooterComponent;
