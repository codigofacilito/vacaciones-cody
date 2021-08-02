import React from "react";
import Hidden from "components/Hidden";
import Grid from "components/Grid";
import { Footer, Link } from "./style";
import { VscHome, VscBook, VscNote } from "react-icons/vsc";

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
const FooterComponent = () => {
  return (
    <Hidden ondesktop>
      <Footer>
        <Grid>
          {data.map((links) => (
            <Link {...links}>
              {links.component} {links.title}
            </Link>
          ))}
        </Grid>
      </Footer>
    </Hidden>
  );
};

export default FooterComponent;
