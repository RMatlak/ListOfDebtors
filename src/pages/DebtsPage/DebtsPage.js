import React, {Component} from 'react';
import AddList from "../../components/AddList/AddList";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class DebtsPage extends Component {
    currentDate = new Date().toISOString().slice(0, 10);
  state = {
    value: "",
    number: "",
    date: this.currentDate,
    secondDate: this.currentDate,
    amount: null,
    errors: {
      name: false,
      money: false
    }
  };

  messages = {
    nameIncorrect: "Musisz podać imię",
    moneyIncorrect: "Musisz podać kwotę"
  };
 
 
  handleChange = e => {
    if (e.target.type === "text") {
      this.setState({
        value: e.target.value
      });
    } else if (e.target.type === "number") {
      this.setState({
        number: e.target.value
      });
    } else {
      this.setState({
        date: e.target.value
      });
    }
  };

  handleDateChange = e => {
    this.setState({
      secondDate: e.target.value
    });
  };

  errorsCheck = () => {
    let value = false;
    let number = false;
    let correct = false;

    if (this.state.value !== "") {
      value = true;
    }
    if (this.state.number !== "") {
      number = true;
    }
    if (value && number) {
      correct = true;
    }

    return {
      correct,
      value,
      number
    };
  };

  handleClick = e => {
    e.preventDefault();

    const errorsCheck = this.errorsCheck();
    if (errorsCheck.correct) {
      this.setState({
        date: this.currentDate,
        secondDate: this.currentDate,
        value: "",
        number: "",
        errors: {
          name: false,
          money: false
        }
      });
      const debt = {
        name: this.state.value,
        money: this.state.number,
        date: this.state.date,
        secondDate: this.state.secondDate,
        userId: this.props.userId
      };
      console.log(this.props.onSendDebts(debt, this.props.token));
    } else {
      this.setState({
        errors: {
          name: !errorsCheck.value,
          money: !errorsCheck.number
        }
      });
    }
  };

  render() {
    const { date, value, number, secondDate, errors, amount } = this.state;
    return (
      <>
        <div className="Style">
          <label for="name">
            Osoba u której masz dług
            <input
              onChange={this.handleChange}
              type="text"
              id="name"
              value={value}
            />
            {errors.name ? <span>{this.messages.nameIncorrect}</span> : null}
          </label>
          <label for="money">
            Wysokość długu (zł)
            <input
              onChange={this.handleChange}
              type="number"
              id="money"
              value={number}
            />
            {errors.money ? <span>{this.messages.moneyIncorrect}</span> : null}
          </label>
          <label for="start">
            Data pożyczki
            <input
              onChange={this.handleChange}
              type="date"
              id="start"
              value={date}
            />
          </label>
          <label for="done">
            Planowana data spłaty
            <input
              onChange={this.handleDateChange}
              type="date"
              id="done"
              value={secondDate}
            />
          </label>
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
        <ul className="debtorsUl">
          <h1>Lista twoich długów ({this.props.debts.length})</h1>
          <AddList tasks={this.props.debts} />
        </ul>
        <h2>Suma: {amount}zł</h2>
      </>
    );
  }
}

const mapStateToProps = state => {
    return {
      debts: state.debts.debts,
      token: state.auth.token,
      userId: state.auth.userId
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onSendDebts: (debts, token) => dispatch(actions.sendDebts(debts, token))
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(DebtsPage);