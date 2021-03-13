import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(`inside set ${this.state.count}`);
    //   }
    // );
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count is : {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
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
