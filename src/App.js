import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
