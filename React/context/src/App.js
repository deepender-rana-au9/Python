//context provides a way to pass data through the component tree without having to pass props down manually at every level
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <>
          <h3>Agent Information</h3>
          <p>Mission Name: {context.data.mName}</p>
          <h2>Mission Status :{context.data.accept}</h2>
          <button onClick={context.isMissionAccepted}>Choose to accept</button>
        </>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};
export default App;
