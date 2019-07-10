import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, currentUser }) => (
  <Route
    render={props =>
      currentUser ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});
export default connect(mapStateToProps)(PrivateRoute);
