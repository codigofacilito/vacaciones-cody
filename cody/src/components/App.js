//COMPONENTS
import Header from "./1 - Header";
import Presentation from "./2 - Presentation";
import Studies from "./3 - Studies";
import Carousel from "./5-Carousel";

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
      </main>
    </>
  );
}

export default App;
