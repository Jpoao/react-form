import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CepSearch from "./pages/CepSearch";
import Home from "./pages/Home";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/cepsearch">
        <CepSearch/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;