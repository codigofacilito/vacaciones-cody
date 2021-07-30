import React, { useState, useRef, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Footer from "components/Footer";
import { GlobalStyle, Layout } from "./style";
//import theme from "theme";

export default function LayoutComponent({
  children,
  title = "Mis vacaciones - HectorMtz22",
}) {
  const [height, setHeight] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setHeight(() => headerRef.current.scrollHeight);
  }, []);

  return (
    <>
      <GlobalStyle theme="purple" />
      <title>{title}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
        rel="stylesheet"
      />
      <Header ref={headerRef} />
      <Sidebar height={height} />
      <Layout>{children}</Layout>
      <Footer />
    </>
  );
}
