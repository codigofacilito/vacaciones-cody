import React, { useState, useRef, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Footer from "components/Footer";
import Contact from "components/Contact";
import { GlobalStyle, Layout } from "./style";
import { Helmet } from "react-helmet";
import theme from "theme";

export default function LayoutComponent({
  children,
  title = "Mis vacaciones",
  description = "Esta es una pagina para el concurso de CodigoFacilito",
}) {
  const [height, setHeight] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    setHeight(() => headerRef.current.scrollHeight);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Helmet
        htmlAttributes={{
          lang: "es",
        }}
      >
        <title>{title} - HectorMtz22</title>
        <meta name="theme-color" content={theme.colors.primaryVariant} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="concurso, codigo facilito, hmtzdev, hectormtz22"
        />
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
      </Helmet>
      <Header ref={headerRef} />
      <Sidebar height={height} />
      <Layout>
        {children}
        <Contact />
      </Layout>
      <Footer />
    </>
  );
}
