import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      mess: "Welcome Visitor",
    };
  }
  change() {
    this.setState({
      mess: "Thanku for subscribing",
    });
  }
  render(props) {
    return (
      <>
        <h1>{this.state.mess}</h1>
        <button onClick={() => this.change()}>Subscribe</button>
      </>
    );
  }
}

export default Message;
