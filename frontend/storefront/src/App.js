import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//This is the navbar
import Nav from "../src/Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Nav />
            <Checkout />
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Nav />
            <MainPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
