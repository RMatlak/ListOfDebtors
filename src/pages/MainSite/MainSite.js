import React, { Component } from "react";
import "./MainSite.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class MainSite extends Component {
  componentDidMount() {
    this.props.onFetchDebtors(this.props.token, this.props.userId);
    this.props.onFetchDebts(this.props.token, this.props.userId);
  }

  render() {
    return (
      <>
        <ul className="mainUl">
          <li>
            {this.props.isAuthenticated ? (
              <NavLink to="/debtors">Lista Dłużników</NavLink>
            ) : (
              <NavLink to="/login">Musisz być zalogowany</NavLink>
            )}
          </li>
          <li className="second">
            {this.props.isAuthenticated ? (
              <NavLink to="/debts">Twoje długi</NavLink>
            ) : (
              <NavLink to="/login">Musisz być zalogowany</NavLink>
            )}
          </li>
        </ul>
        <div className="Login">
          {this.props.isAuthenticated ? (
            <NavLink to="/logout">Wyloguj się</NavLink>
          ) : (
            <NavLink to="/login">Zaloguj się</NavLink>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
    userId: state.auth.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchDebtors: (token, userId) =>
      dispatch(actions.fetchDebtors(token, userId)),
    onFetchDebts: (token, userId) => dispatch(actions.fetchDebts(token, userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSite);
