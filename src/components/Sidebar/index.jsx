import React from "react";
import { Link, Sidebar } from "./style";
import { VscHome, VscBook } from "react-icons/vsc";

const SidebarComponent = ({ height }) => {
  console.log(height);
  return (
    <Sidebar height={height}>
      <Link to="/">
        <VscHome size="2rem" /> Inicio
      </Link>
      <Link to="/fotos">
        <VscBook size="2rem" /> Fotos
      </Link>
    </Sidebar>
  );
};

export default SidebarComponent;
