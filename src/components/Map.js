import allStates from "./allstates.json";
import './Map.css';
import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21]
};

function getStateData (id, name) {

  /*
  Make call to backend to fetch data for the state, return type will be JSON 
  */

  return name; 
}

const Map = ({ setToolTipContent }) => {
  return (
    <ComposableMap data-tip ="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="white"
                geography={geo}
                fill="#DDD"
                data-tip data-for={geo.id}
                onMouseEnter = { () => {

                  const name = geo.properties.name; 
                  const id = geo.id; 
                  
                  const data = getStateData(id, name);                 

                  return (
                  setToolTipContent(`<h3>${data}</h3>
                   <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`));
                }}
                onMouseLeave = { () =>{
                  setToolTipContent("");
                }}
                style={{
                    hover: {
                      stroke: "black"
                    }
                  }}
              />
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
