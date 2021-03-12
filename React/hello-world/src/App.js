import "./App.css";
import { Component } from "react";
import Greet from "./Greet";
import { Welcome } from "./Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>Hello deepender</h1>
          <Greet name={"Deepender Rana"} />
          <Welcome /> */}
          {/* <Message mess={"Welcome Visitor"} /> */}
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
