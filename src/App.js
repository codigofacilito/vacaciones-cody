
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/Inicio" component={Home} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
