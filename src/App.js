import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" component={Home} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
