import React, { Component } from "react";
import Header from "./components/layout/Header";
import CitySearch from "./components/CitySearch";
import axios from "axios";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
      </div>
    );
  }
}

export default App;
