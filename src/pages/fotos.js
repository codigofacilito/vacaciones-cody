import React from "react";
import LayoutPage from "components/Layout";
import Section from "components/Section";
import Grid from "components/Grid";
import { StaticImage } from "gatsby-plugin-image";

const Fotos = () => {
  return (
    <LayoutPage>
      <Section>
        <h2>Galería completa de mis vacaciones</h2>
        <Grid length="3">
          <StaticImage src="../images/1.jpg" alt="Cody en la playa" />
          <StaticImage src="../images/2.jpg" alt="Cody acampando" />
          <StaticImage src="../images/3.jpg" alt="Cody en una alberca" />
          <StaticImage src="../images/4.jpg" alt="Cody en una alberca" />
          <StaticImage src="../images/5.jpg" alt="Cody en una alberca" />
          <StaticImage src="../images/6.jpg" alt="Cody en una alberca" />
        </Grid>
      </Section>
    </LayoutPage>
  );
};

export default Fotos;
