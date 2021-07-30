import React from "react";
import { Link, Sidebar } from "./style";

const SidebarComponent = () => {
  return (
    <Sidebar>
      <Link to="/">Inicio</Link>
      <Link to="/fotos">Fotos</Link>
    </Sidebar>
  );
};

export default SidebarComponent;
