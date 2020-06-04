import React, { Component } from "react";
import Header from "./components/layout/Header";
import CitySearch from "./components/CitySearch";
import axios from "axios";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCodes: [],
    };
  }

  getCityName = (e) => {
    let cityName = e.target.value.toUpperCase();
    if (cityName.length > 0) {
      axios
        .get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`)
        .then((res) => {
          const zipCodes = res.data;
          this.setState({
            zipCodes,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.setState({
        zipCodes: [],
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <p style={paraStyle}>Enter City</p>
          <form style={formStyle}>
            <input
              type="text"
              onChange={this.getCityName}
              placeholder="Try SPRINGFIELD"
            />
          </form>
          <hr />
          <div>
            <p style={paraStyle}>Zip Codes In The Citu</p>
            <CitySearch zipCodes={this.state.zipCodes} />
          </div>
        </div>
      </div>
    );
  }
}

const paraStyle = {
  marginTop: "25px",
  textAlign: "center",
};

const formStyle = {
  marginBottom: "30px",
  textAlign: "center",
};

export default App;
