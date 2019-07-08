import React, { Component } from "react";
import Signin from "../../components/SignIn/SignIn";
import SignUp from "../../components/Signup/SignUp";
class SignInAndSignUp extends Component {
  render() {
    return (
      <section className="sign-in-and-sign-up">
        <Signin />
        <SignUp />
      </section>
    );
  }
}
export default SignInAndSignUp;
