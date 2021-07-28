//COMPONENTS
import Header from "./1 - Header";
import Presentation from "./2 - Presentation";
import Studies from "./3 - Studies";
import Timeline from "./4-Timeline";

//STYLESHEET
import "../stylesheets/App.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Presentation />
        <Studies />
      </main>
    </>
  );
}

export default App;
