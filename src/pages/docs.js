import React from "react";
import LayoutPage from "components/Layout";
import Section from "components/Section";
import P from "components/Paragraph";
import Link from "components/Link";
import Button from "components/Button";

const Docs = () => {
  return (
    <LayoutPage>
      <Section>
        <h2>Documentación</h2>
        <P>
          Si te gustó esta aplicación y tienes curiosidad sobre cómo está
          diseñada, puedes ir a ver mi repositorio de Github!
        </P>
        <Link href="https://github.com/HectorMtz22/vacaciones-cody">
          <Button>
            https://github.com/
            <wbr />
            HectorMtz22/
            <wbr />
            vacaciones-cody
          </Button>
        </Link>
      </Section>
    </LayoutPage>
  );
};

export default Docs;
