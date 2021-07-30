import React from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { GlobalStyle, Layout } from "./style";
//import theme from "theme";

export default function LayoutComponent({
  children,
  title = "Mis vacaciones - HectorMtz22",
}) {
  return (
    <>
      <GlobalStyle theme="purple" />
      <title>{title}</title>
      <Header />
      <Sidebar />
      <Layout>{children}</Layout>
    </>
  );
}
