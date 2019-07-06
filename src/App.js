import React from "react";
import Routes from "./config/routes";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <Header />
      <section>
        <Routes />
      </section>
    </main>
  );
}

export default App;
