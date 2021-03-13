import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // this.changeText = this.changeText.bind(this);
  }

  // changeText() {
  //   if (this.state.message === "Hello") {
  //     this.setState({
  //       message: "Welcome",
  //     });
  //   } else {
  //     this.setState({
  //       message: "Hello",
  //     });
  //   }
  // }
  changeText = () => {
    if (this.state.message === "Hello") {
      this.setState({
        message: "Welcome",
      });
    } else {
      this.setState({
        message: "Hello",
      });
    }
  };
  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeText}>Click</button>
      </div>
    );
  }
}

export default EventBind;
