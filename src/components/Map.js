import allStates from "./allstates.json";
import './Map.css';
import React from 'react';
import { geoCentroid } from "d3-geo";
import MapGrid from './MapGrid.js';
import MapEcharts from './MapEcharts.js';
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

const map = {
  "Alabama": "AL",
  "Alaska" : "AK",
  "American Samoa" : "AS",
  "Arizona" : "AZ",
  "Arkansas" : "AR",
  "Armed Forces Americas" : "AA",
  "Armed Forces Europe" : "AE",
  "Armed Forces Pacific" : "AP",
  "California" : "CA",
  "Colorado" : "CO",
  "Connecticut" : "CT",
  "Delaware" : "DE",
  "District Of Columbia" : "DC",
  "Florida" : "FL",
  "Georgia" : "GA",
  "Guam" : "GU",
  "Hawaii" : "HI",
  "Idaho" : "ID",
  "Illinois" : "IL",
  "Indiana" : "IN",
  "Iowa" : "IA",
  "Kansas" : "KS",
  "Kentucky" : "KY",
  "Louisiana" : "LA",
  "Maine" : "ME",
  "Marshall Islands" : "MH",
  "Maryland" : "MD",
  "Massachusetts" : "MA",
  "Michigan" : "MI",
  "Minnesota" : "MN",
  "Mississippi" : "MS",
  "Missouri" : "MO",
  "Montana" : "MT",
  "Nebraska" : "NE",
  "Nevada" : "NV",
  "New Hampshire" : "NH",
  "New Jersey" : "NJ",
  "New Mexico" : "NM",
  "New York" : "NY",
  "North Carolina" : "NC",
  "North Dakota" : "ND",
  "Northern Mariana Islands" : "NP",
  "Ohio" : "OH",
  "Oklahoma" : "OK",
  "Oregon" : "OR",
  "Pennsylvania" : "PA",
  "Puerto Rico" : "PR",
  "Rhode Island" : "RI",
  "South Carolina" : "SC",
  "South Dakota" : "SD",
  "Tennessee" : "TN",
  "Texas" : "TX",
  "US Virgin Islands" : "VI",
  "Utah" : "UT",
  "Vermont" : "VT",
  "Virginia" : "VA",
  "Washington" : "WA",
  "West Virginia" : "WV",
  "Wisconsin" : "WI",
  "Wyoming" : "WY"
}

const Map = ({setToolTipContent,stateInfo,returnState}) => { 
  const getStateInfo = (temp_name) => {
    
    if(stateInfo.length >0 ){
      for(var i =0;i<stateInfo.length;i++){
        if(stateInfo[i].name === temp_name) return stateInfo[i];
      }
    }
    else{
      var err_message = {
        "hdays" : -99,
        "firstShot" : -99,
        "secShot" : -99,
        "vacPerDay" : -99
      };
      return err_message;
    }
  };
  
// Assign Color to difference states 
// based on how many day to herd immunity
function getStateColor (temp_name) {
  if(stateInfo === 0) return "#9c4dcc";
  else{
    for(var i =0;i<stateInfo.length;i++){
      if(temp_name === stateInfo[i].name){
        if(stateInfo[i].hdays >=150 ) return "#f44336";
        else if(stateInfo[i].hdays >=120 ) return "#fa5788";
        else if(stateInfo[i].hdays >=100 ) return "#ff8a50"
        else if(stateInfo[i].hdays >=80 ) return "#ffca28";
        else if(stateInfo[i].hdays >=8 ) return "#81d4fa";
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
                fill = {getStateColor(map[geo.properties.name])}
                data-tip data-for={geo.id}
                onMouseEnter = { () => {
                  const name = geo.properties.name; 
                  const state_vacc_data = getStateInfo(map[name]);
                  return (
                  setToolTipContent(`<h1>State of ${name} </h1>
                   <h1 >${state_vacc_data.hdays} DAYS to Herd Immunity.</h1>
                   <h3 >${state_vacc_data.firstShot} residents are partially vaccinated.</h3>
                   <h3 >${state_vacc_data.secShot} residents are fully vaccinated.</h3>
                   <h3 >${state_vacc_data.vacPerDay} residents will be vaccinated per day.</h3> 
                   `));
                }}
                onMouseLeave = {() =>{
                  setToolTipContent("");
                }}
                onClick ={()=>{
                  returnState(map[geo.properties.name]);
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