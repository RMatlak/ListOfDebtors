import React, { Component } from "react";
import "../styles/App.scss";
import MainSite from "./MainSite";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <main>
            <MainSite />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
