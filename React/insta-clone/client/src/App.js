import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import SignUp from "./components/pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={Profile} />
      <Route path="/signup" component={SignUp} />
    </BrowserRouter>
  );
}

export default App;
