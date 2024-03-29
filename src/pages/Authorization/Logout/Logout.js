import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Logout extends Component {
  state = {};
  componentDidMount() {
    this.props.onLogout();
  }

  render() {
    return <Redirect to="/"></Redirect>;
  }
}



const mapDisptachToProps = dispatch => {
  return {
    onLogout: () => dispatch(actions.logout())
  };
};

export default connect(
  null,
  mapDisptachToProps
)(Logout);
