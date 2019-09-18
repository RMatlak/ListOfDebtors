import React, { Component } from "react";
import "../styles/App.scss";
import MainSite from "./MainSite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DebtorsPage from "../pages/DebtorsPage";
import Auth from "../pages/Auth";
import Logout from "../pages/Logout";

class App extends Component {
  state = {
  };

  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
            <main>
              <Route path="/" exact component={MainSite} />
              <Route path="/debtors" component={DebtorsPage} />
              <Route path='/login' component={Auth}/>
              <Route path='/logout' component={Logout}/>
            </main>
        </Router>
      </>
    );
  }
}

export default App;
