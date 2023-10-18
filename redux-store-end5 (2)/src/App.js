import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CartButton from "./components/CartButton";
import NavButton from "./components/NavButton";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="root">
        <div className="app-bar">
          <h1 className="title">ShopCart</h1>
          <div className="navigation">
            <Link to="/">
              <NavButton label="CATALOG" />
            </Link>
            <Link to="/cart">
              <CartButton items={0} />
            </Link>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Catalog />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
