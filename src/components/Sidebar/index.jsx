import React from "react";
import { Link, Sidebar } from "./style";
import { VscHome, VscBook } from "react-icons/vsc";
import Hidden from "components/Hidden";

const SidebarComponent = ({ height }) => {
  return (
    <Hidden onmovil>
      <Sidebar height={height}>
        <Link to="/">
          <VscHome size="2rem" /> Inicio
        </Link>
        <Link to="/fotos">
          <VscBook size="2rem" /> Fotos
        </Link>
      </Sidebar>
    </Hidden>
  );
};

export default SidebarComponent;
