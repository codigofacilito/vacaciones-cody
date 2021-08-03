import { useState, useRef, useEffect } from "react";

//COMPONENTS
import Header from "./1 - Header";
import Presentation from "./2 - Presentation";
import Studies from "./3 - Studies";
import Carousel from "./5-Carousel";
import ReasonsToVacay from "./6-ReasonsToVacay";
import Colab from "./7-Colab";
import Top from "./8-Top";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  //STATES
  let [showGoTop, setshowGoTop] = useState("goTopHidden");
  const [scrollPosition, setSrollPosition] = useState(0);

  //Ref for the ScrollUp action
  const refScrollUp = useRef();

  //Scroll position show/hide "top" button

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  //Scroll Up Handler
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  //Scroll Listener
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });
  return (
    <>
      <div ref={refScrollUp}> </div>
      <Header />
      <main>
        <Presentation />
        <Studies />
        <Carousel />
        <ReasonsToVacay />
        <Colab />
        <Top showGoTop={showGoTop} scrollUp={handleScrollUp} />
      </main>
    </>
  );
}

export default App;
