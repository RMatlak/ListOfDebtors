import React, { Component } from "react";
import "../styles/App.scss";
import MainSite from "./MainSite";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DebtorsPage from "../pages/DebtorsPage";

class App extends Component {
  state = {
    pageOne: false
  };

  handleChange = () => {
    this.setState({
      pageOne: !this.state.pageOne
    });
  };

  render() {
    return (
      <>
        <Router>
          <main>
            {this.state.pageOne ? null : (
              <MainSite handleChange={this.handleChange} />
            )}
            <Route path="/debtors" component={DebtorsPage} />
          </main>
        </Router>
      </>
    );
  }
}

export default App;
