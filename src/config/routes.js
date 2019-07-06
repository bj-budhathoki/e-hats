import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
};
export default Routes;
