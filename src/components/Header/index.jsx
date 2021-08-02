import React from "react";
import { Header } from "./style";
import Hidden from "components/Hidden";

const HeaderComponent = React.forwardRef((_, ref) => {
  return (
    <Header ref={ref}>
      <h1>Estas son mis Vacaciones</h1>
      <Hidden onmovil>
        <p>
          Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para
          desestresarme del código, y en esta página quiero compartirlo contigo.
        </p>
      </Hidden>
    </Header>
  );
});

export default HeaderComponent;
