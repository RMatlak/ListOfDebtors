import React, { Component } from "react";
import "../styles/App.scss";
import MainSite from "./MainSite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DebtorsPage from "../pages/DebtorsPage";

class App extends Component {
  state = {
    tasks: []
  };

  

  render() {
    return (
      <>
        <Router>
          <main>
            <Route path="/" exact component={MainSite} />
            <Route path="/debtors" component={DebtorsPage} />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
