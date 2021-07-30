import React from "react";
import { GlobalStyle } from "./style";
//import theme from "theme";

export default function Layout({
  children,
  title = "Mis vacaciones - HectorMtz22",
}) {
  return (
    <>
      <GlobalStyle theme="purple" />
      <title>{title}</title>
      {children}
    </>
  );
}
