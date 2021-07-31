import React from "react";
import { Link, Sidebar } from "./style";
import { VscHome, VscBook, VscNote } from "react-icons/vsc";
import Hidden from "components/Hidden";

const size = "2rem";

const data = [
  {
    to: "/",
    title: "Inicio",
    component: <VscHome size={size} />,
  },
  {
    to: "/fotos",
    title: "Fotos",
    component: <VscBook size={size} />,
  },
  {
    to: "/docs",
    title: "Docs",
    component: <VscNote size={size} />,
  },
];

const SidebarComponent = ({ height }) => {
  return (
    <Hidden onmovil>
      <Sidebar height={height}>
        {data.map((links) => (
          <Link {...links}>
            {links.component} {links.title}
          </Link>
        ))}
      </Sidebar>
    </Hidden>
  );
};

export default SidebarComponent;
