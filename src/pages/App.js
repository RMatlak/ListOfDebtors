import React, { Component } from "react";
import "./App.scss";
import MainSite from "../pages/MainSite/MainSite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DebtorsPage from "./Debtors/DebtorsPage";
import DebtsPage from "./DebtsPage/DebtsPage";
import Auth from "../pages/Authorization/Auth";
import Logout from "../pages/Authorization/Logout/Logout";

class App extends Component {
  state = {};

  render() {
   
    

    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <main>
            <Route path="/" exact component={MainSite} />
            <Route path="/debtors" component={DebtorsPage} />
            <Route path="/debts" component={DebtsPage} />
            <Route path="/login" component={Auth} />
            <Route path="/logout" component={Logout} />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
