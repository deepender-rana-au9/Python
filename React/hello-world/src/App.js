import "./App.css";
import { Component } from "react";
import Greet from "./Greet";
import { Welcome } from "./Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FuntionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComp from "./components/PrentComp";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <h1>Hello deepender</h1>
          <Greet name={"Deepender Rana"} />
          <Welcome /> */}
          {/* <Message mess={"Welcome Visitor"} /> */}
          {/* <Counter /> */}
          {/* <FuntionClick />
          <ClassClick /> */}
          {/* <EventBind /> */}
          {/* <ParentComp /> */}
          {/* <UserGreeting /> */}
          <NameList />
        </header>
      </div>
    );
  }
}

export default App;
