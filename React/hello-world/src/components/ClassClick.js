import React, { Component } from "react";

class ClassClick extends Component {
  constructor() {
    super();
  }
  click() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick;
