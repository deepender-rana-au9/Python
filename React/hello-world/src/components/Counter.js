import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Count is : {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <span>&nbsp;&nbsp;</span>
        <button onClick={() => this.decrement()}>Decrement</button>
        <span>&nbsp;&nbsp;</span>
        <button
          onClick={() =>
            this.setState({
              count: 0,
            })
          }
        >
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
