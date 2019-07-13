import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignUp from "../pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from "../pages/Checkout/Checkout";
const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/signin"
        render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
      />
    </Switch>
  );
};
export default Routes;
