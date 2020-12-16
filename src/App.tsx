import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Details from "./pages/details";
import Favorite from "./pages/favorite";
import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/:id" component={Details} />
        <Route exact path="/favorite" component={Favorite} />
      </Switch>
    </div>
  );
};

export default App;
