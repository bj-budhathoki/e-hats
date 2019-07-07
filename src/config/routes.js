import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignUp from "../pages/SignInAndSignUp/SignInAndSignUp";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/signin" component={SignInAndSignUp} />
    </Switch>
  );
};
export default Routes;
