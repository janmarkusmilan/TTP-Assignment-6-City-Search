import React, { Component } from "react";

class CitySearch extends Component {
  render() {
    if (this.props.zipCodes.length > 0) {
      return this.props.zipCodes.map((zips) => {
        return <div style={zipStyle}>{zips}</div>;
      });
    } else {
      return <p style={zipStyle}>No Results</p>;
    }
  }
}

const zipStyle = {
  textAlign: "center",
};

export default CitySearch;
