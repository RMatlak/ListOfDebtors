import React, { Component } from "react";

class DebtorsPage extends Component {
  currentDate = new Date().toISOString().slice(0, 10);
  state = {};
  render() {
    return (
      <>
        <div>
          <label for="name">
            Imię dłużnika <input type="text" id="name" />
          </label>
          <label for="money">
            Wysokość długu (zł)
            <input type="number" id="money" />
          </label>
          <label for="start">
            Data porzyczki
            <input type="date" id="start" value={} />
          </label>
          <label for="done">
            Planowana date spłaty
            <input type="date" id="done" value={} />
          </label>
        </div>
      </>
    );
  }
}

export default DebtorsPage;
