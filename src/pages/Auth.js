import React, { Component } from "react";
import "../styles/Auth.scss";
// import axios from "axios";
import * as actions from "../store/actions/index";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    email: "",
    password: "",
    errors: {
      password: false,
      email: false
    },
    isSignup: true
  };

  messages = {
    passwordIncorrect:
      "Hasło musi zawierać conajmniej 6 znaków, i nie może zawierać spacji.",
    emailIncorrect: "Niepoprawny e-mail"
  };



  inputChangeHandler = e => {
    if (e.target.type === "email") {
      this.setState({ email: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };

  passwordCheck = () => {
    let password = false;

    if (
      this.state.password.length >= 6 &&
      this.state.password.indexOf(" ") <= 0
    ) {
      password = true;
    }
    return {
      password
    };
  };

  validateEmail = email => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  submitHandler = e => {
    e.preventDefault();
    const passwordCheck = this.passwordCheck();
    const emailCheck = this.validateEmail(this.state.email);
    if (passwordCheck.password && emailCheck) {
      this.props.onAuth(
        this.state.email,
        this.state.password,
        this.state.isSignup
      );
      this.setState({
        email: "",
        password: "",
        errors: {
          password: false,
          email: false
        }
      });
    } else {
      this.setState({
        errors: {
          password: !passwordCheck.password,
          email: !emailCheck
        }
      });
    }
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    let passwordError = null;
    let emailError = null;

    if (this.state.errors.password) {
      passwordError = (
        <span style={{ color: "red" }}>{this.messages.passwordIncorrect}</span>
      );
    }
    if (this.state.errors.email) {
      emailError = (
        <span style={{ color: "red" }}>{this.messages.emailIncorrect}</span>
      );
    }

    const { email, password } = this.state;

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p style={{ color: "red" }}>{this.props.error}</p>;
    }
    let authRedirect = null;

    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to="/"></Redirect>;
    }
    return (
      <div className="Auth">
        {authRedirect}
        {errorMessage}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.submitHandler}>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={this.inputChangeHandler}
            />{" "}
            {emailError}
            <input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={this.inputChangeHandler}
            />{" "}
            {passwordError}
            <button className="Button" onClick={this.authHandler}>
              SUBMIT
            </button>
          </form>
        )}
        <button className="Button" onClick={this.switchAuthModeHandler}>
          SWITCH TO {this.state.isSignup ? "SIGNIN" : "SIGNUP"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    tasks: state.debtors.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth);
