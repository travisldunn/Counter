import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    number: "",
    operator: "",
    numberNext: 0
  };

  handleNum = num => {
    this.setState(prevState => ({
      number: (prevState.number += num)
    }));
  };

  handleOperator = op => {
    this.setState({ operator: op });

    let numberNext = this.state.number;

    this.setState({ numberNext });
    this.setState({ number: "" });
  };

  handleEquals = () => {
    let equals = "";

    if (this.state.operator === "+") {
      equals = Number(this.state.numberList) + Number(this.state.number);
    } else {
      equals = Number(this.state.numberList) - Number(this.state.number);
    }

    console.log(equals);

    this.setState({ number: equals });
  };

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={() => this.handleNum(1)}>1</button>
        <button onClick={() => this.handleNum(2)}>2</button>
        <button onClick={() => this.handleNum(3)}>3</button>
        <button onClick={() => this.handleNum(4)}>4</button>
        <button onClick={() => this.handleNum(5)}>5</button>
        <button onClick={() => this.handleNum(6)}>6</button>
        <button onClick={() => this.handleNum(7)}>7</button>
        <button onClick={() => this.handleNum(8)}>8</button>
        <button onClick={() => this.handleNum(9)}>9</button>

        <button onClick={() => this.handleOperator("+")}>+</button>
        <button onClick={() => this.handleOperator("-")}>-</button>
        <button onClick={this.handleEquals}>=</button>
      </div>
    );
  }
}

export default Counter;
