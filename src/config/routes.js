import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import ShopPage from "../pages/ShopPage/ShopPage";
import SignInAndSignUp from "../pages/SignInAndSignUp/SignInAndSignUp";
const Routes = ({ currentUser }) => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route
        exact
        path="/signin"
        render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)}
      />
    </Switch>
  );
};
export default Routes;
