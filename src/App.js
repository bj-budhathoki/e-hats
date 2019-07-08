import React from "react";
import Routes from "./config/routes";
import Header from "./components/Header/Header";
import { auth } from "./firebase/firebase.utils";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    console.log("mount");
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    const { currentUser } = this.state;
    return (
      <main>
        <Header currentUser={currentUser} />
        <section>
          <Routes />
        </section>
      </main>
    );
  }
}

export default App;
