import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Deepender</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h2>Welcome Guest</h2>
    //     </div>
    //   );
    // }
    ///////////////////////////////////
    // return this.state.isLoggedIn ? (
    //   <h2>Welcome Deepender</h2>
    // ) : (
    //   <h2>Welcome Guest</h2>
    // );
    ////////////////////////////////////
    return this.state.isLoggedIn && <h2>Welcome</h2>;
  }
}

export default UserGreeting;
