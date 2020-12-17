import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Details from "./pages/details";
import Favorite from "./pages/favorite";
import Home from "./pages/home";
import About from "./pages/about";
import Search from "./pages/search";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipe/:id" component={Details} />
        <Route exact path="/favorite" component={Favorite} />
        <Route exact path="/search" component={Search} />
      </Switch>
      <div>Footer</div>
    </div>
  );
};

export default App;
