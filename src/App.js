import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles/index.scss";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { Recipes } from "./pages/recipes";

function App() {
  return (
    <div className="App">
      <Header />

      {/* Router */}
      <Switch>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
