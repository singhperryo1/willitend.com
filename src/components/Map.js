import './Map.css';
import React, { Component } from 'react';
import USAMap from "react-usa-map";


class Map extends Component {

  mapHandler = (event) => {

    const state = event.target.dataset.name; 

    console.log(event.target.dataset);

    if (state === "CA") {
      console.log("The data is for " + state + "is : xyz")
    } else {
      alert("State: " + state)
    }

  };

  statesCustomConfig = () => {

    /*
    Comments: 
    fill color according to the data + state
    Hover w/ boundaries + data 
    avoid onClick events 
    */

    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };
 
  render() {
    return (
      <div className="Map">
        <USAMap customize = {this.statesCustomConfig()} onClick = {this.mapHandler} />
      </div>
    );
  }
}
 
export default Map;
