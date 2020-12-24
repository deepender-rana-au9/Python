import React from "react";
import Menu from "./Menu";
import "./App.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/about" component={About}></Route>

        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
