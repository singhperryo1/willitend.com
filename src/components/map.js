import React, { Component } from 'react';
import USAMap from "react-usa-map";


class Map extends Component {

  mapHandler = (event) => {
    alert("State: " + event.target.dataset.name);
  };
 
  render() {
    return (
      <div className="Map">
        <USAMap onClick={this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;