import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Nav from "./Components/Nav/Nav";
import MainPage from "../src/Components/MainPage/MainPage";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register";
import UserDetails from "../src/Components/UserDetails/UserDetails";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Nav />

            {/* <Checkout /> */}
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route path="/register">
            <Nav />
            <UserDetails />
          </Route>
          <Route path="/">
            <Nav />
            <MainPage />
            {/* <Home /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
