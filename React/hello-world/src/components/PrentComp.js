import React, { Component } from "react";
import ChildComp from "./ChildComp";
class PrentComp extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(child) {
    alert(`${this.state.message} from ${child}`);
  }
  render() {
    return (
      <div>
        <ChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default PrentComp;
