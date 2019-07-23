import React, { Component } from "react";
import "../styles/DebtorsPage.scss";
import AddList from "../components/AddList";

class DebtorsPage extends Component {
  currentDate = new Date().toISOString().slice(0, 10);
  state = {
    date: this.currentDate,
    secondDate: this.currentDate,
    value: "",
    number: "",
    tasks: [],
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
    let name = false;
    let money = false;
    let correct = false;

    if (this.state.value !== "") {
      name = true;
    }
    if (this.state.number !== "") {
      money = true;
    }
    if (money && name) {
      correct = true;
    }

    return {
      correct,
      name,
      money
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
      const task = {
        name: this.state.value,
        money: this.state.number,
        date: this.state.date,
        secondDate: this.state.secondDate
      };
      let tasks = [...this.state.tasks];
      tasks.push(task);
      this.setState({
        tasks
      });
    } else {
      this.setState({
        errors: {
          name: !errorsCheck.name,
          money: !errorsCheck.money
        }
      });
    }
  };

  render() {
    const { date, value, number, secondDate, errors } = this.state;

    return (
      <>
        <div>
          <label for="name">
            Imię dłużnika
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
          <h1>Lista dłuzników ({this.state.tasks.length})</h1>
          <AddList tasks={this.state.tasks} />
        </ul>
      </>
    );
  }
}

export default DebtorsPage;
