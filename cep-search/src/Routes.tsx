import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <h1>HOME</h1>
      </Route>
      <Route path="/cepsearch">
        <h1>CEP SEARCH</h1>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;