//COMPONENTS
import Header from "./1 - Header";
import Presentation from "./2 - Presentation";
import Studies from "./3 - Studies";
import Carousel from "./5-Carousel";
import ReasonsToVacay from "./6-ReasonsToVacay";
import Colab from "./7-Colab";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Studies />
        <Carousel />
        <ReasonsToVacay />
        <Colab />
      </main>
    </>
  );
}

export default App;
