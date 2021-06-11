import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyle";
import { Description } from "./pages/Description";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Home} />
          <Route path="/description" component={Description} /> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/description">
            <Description />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
