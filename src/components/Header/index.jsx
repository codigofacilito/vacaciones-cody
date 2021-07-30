import React, { useRef } from "react";
import { Header } from "./style";

const HeaderComponent = () => {
  const myRef = React.createRef();
  console.log(myRef.current);
  return (
    <Header ref={myRef}>
      <h1>Estas son mis Vacaciones</h1>
      <p>
        Soy Cody, un aspirante a Dev, en 2019, organicé un viaje para
        desestresarme del código, y en esta página quiero compartirlo contigo.
      </p>
    </Header>
  );
};

export default HeaderComponent;
