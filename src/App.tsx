import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Details />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

/*   const key = "0d0b04ebf0cd4c9a8820941daaf1f364";
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch" + "?apiKey=" + key,
      { query: "pasta" }
    )
      .then((res) => res.json())
      .then((resjson) => console.log(resjson));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/716429/information" +
        "?apiKey=" +
        key
    )
      .then((res) => res.json())
      .then((jsonres) => console.log(jsonres));
  }, []); */
