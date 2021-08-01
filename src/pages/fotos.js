import React from "react";
import LayoutPage from "components/Layout";
import Grid from "components/Grid";
import Gallery from "components/Gallery";
import Section from "components/Section";

const items = [
  { id: 1, filename: "1.jpg", alt: "Cody en la playa" },
  { id: 2, filename: "2.jpg", alt: "Cody acampando" },
  { id: 3, filename: "3.jpg", alt: "Cody en una alberca" },
  { id: 4, filename: "4.jpg", alt: "Cody en una alberca" },
  { id: 5, filename: "5.jpg", alt: "Cody en una alberca" },
  { id: 6, filename: "6.jpg", alt: "Cody en una alberca" },
];

const Fotos = () => {
  return (
    <LayoutPage title="Mis fotos">
      <Section noanimations>
        <h2>Galería completa de mis vacaciones</h2>
        <Grid length="3" movil>
          <Gallery items={items} />
        </Grid>
      </Section>
    </LayoutPage>
  );
};

export default Fotos;
