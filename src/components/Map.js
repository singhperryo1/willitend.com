import allStates from "./allstates.json";
import './Map.css';
import MapEcharts from './MapEcharts.js';
import MapGrid from "./MapGrid.js";
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

const Map = ({ setToolTipContent, stateInfo }) => { 

const getStateInfo = (name) => {

  if (stateInfo.length > 0 ) {
    for (var i =0 ; i < stateInfo.length; i++) {
      if (stateInfo[i].name === name) {
        var stateData = {
        "firstShot": stateInfo[i].firstShot,
        "secShot": stateInfo[i].secShot,
        "vacPerDay": stateInfo[i].vacPerDay,
        "pop": stateInfo[i].pop,
        "hdays": stateInfo[i].hdays,
        "hpop": stateInfo[i].hpop
       }

       return stateData;
      } 
      }
    } else {
      var err_message = {
        "hdays" : -99,
        "firstShot" : -99,
        "secShot" : -99,
        "vacPerDay" : -99
      };
      return err_message;
    }
  }

function getStateColor (id) {

  const name = allStates.find(s => s.val === id).id;

  if (stateInfo === 0) return "#9c4dcc";
  else {
    for (var i =0; i < stateInfo.length; i++) {
      if (name === stateInfo[i].name) {
        if (stateInfo[i].hdays >=150 ) return "#f44336";
        else if (stateInfo[i].hdays >=120 ) return "#fa5788";
        else if (stateInfo[i].hdays >=100 ) return "#ff8a50"
        else if (stateInfo[i].hdays >=80 ) return "#ffca28";
        else if (stateInfo[i].hdays >=8 ) return "#81d4fa";
        else return "#e0e0e0";
      }
    }
  }
}

  return (
    <div>
    <ComposableMap data-tip ="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
             
             <Geography
                key={geo.rsmKey}
                stroke="white"
                geography={geo}
                fill = {getStateColor(geo.id)}
                data-tip data-for={geo.id}
                onMouseEnter = { () => {

                  const name = allStates.find(s => s.val === geo.id).id;
                  const data = getStateInfo(name);

                  const hDays = data.hdays
                  const vacPerDay = data.vacPerDay

                  return (
                  setToolTipContent(`<h3>${geo.properties.name}</h3>
                   <p style ="display: inline;">
                   <h2 style = "display: inline;">${hDays} DAYS</h2>    to Herd Immunity</p>
                    <h3 style = "display: inline;">${vacPerDay} Vaccinations</h2>    Per Day
                   </p>`));
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
    <MapGrid/>
    <MapEcharts stateInfo={stateInfo}/>
  </div>
  );
};

export default Map;