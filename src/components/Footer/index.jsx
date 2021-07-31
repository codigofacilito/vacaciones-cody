import React from "react";
import Hidden from "components/Hidden";
import Grid from "components/Grid";
import { Footer, Link } from "./style";
import { VscHome, VscBook } from "react-icons/vsc";

const FooterComponent = () => {
  return (
    <Hidden ondesktop>
      <Footer>
        <Grid length="2">
          <Link to="/">
            <VscHome size="2rem" /> Inicio
          </Link>
          <Link to="/fotos">
            <VscBook size="2rem" /> Fotos
          </Link>
        </Grid>
      </Footer>
    </Hidden>
  );
};

export default FooterComponent;
