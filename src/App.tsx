import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, SearchResult, DrinkDetail, NotFound } from "./views";
import { Header } from "./components";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/search">
            <Header />
            <SearchResult />
          </Route>
          <Route path="/detail/:id">
            <Header />
            <DrinkDetail />
          </Route>
          <Route path="*">
            <Header />
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
