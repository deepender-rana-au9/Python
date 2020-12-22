import React from "react";
import "./css/styles.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import About from "./About";
import Portfolio from "./Portfolio";
import Header from "./Header";

const App = () => {
  return (
    <>
      <Navbar />;
      <Header />;
      <Portfolio />;
      <About />;
      <Contact />;
      <Footer />;
      <CopyRight />
    </>
  );
};

export default App;
