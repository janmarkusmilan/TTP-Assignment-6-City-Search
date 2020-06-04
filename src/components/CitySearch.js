import React, { Component } from "react";

class CitySearch extends Component {
  render() {
    if (this.props.zipCodes.length > 0) {
      return this.props.zipCodes.map((zips) => {
        return (
          <div key={zips.RecordNumber} style={zipStyle}>
            {zips}
          </div>
        );
      });
    } else {
      return <div style={zipStyle}>No Results</div>;
    }
  }
}

const zipStyle = {
  textAlign: "center",
};

export default CitySearch;
