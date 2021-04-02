import allStates from "./allstates.json";
import './Map.css';
import React, { Component } from 'react';
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
function convertRegion(input, to) {
  var states = [
      ['Alabama', 'AL'],
      ['Alaska', 'AK'],
      ['American Samoa', 'AS'],
      ['Arizona', 'AZ'],
      ['Arkansas', 'AR'],
      ['Armed Forces Americas', 'AA'],
      ['Armed Forces Europe', 'AE'],
      ['Armed Forces Pacific', 'AP'],
      ['California', 'CA'],
      ['Colorado', 'CO'],
      ['Connecticut', 'CT'],
      ['Delaware', 'DE'],
      ['District Of Columbia', 'DC'],
      ['Florida', 'FL'],
      ['Georgia', 'GA'],
      ['Guam', 'GU'],
      ['Hawaii', 'HI'],
      ['Idaho', 'ID'],
      ['Illinois', 'IL'],
      ['Indiana', 'IN'],
      ['Iowa', 'IA'],
      ['Kansas', 'KS'],
      ['Kentucky', 'KY'],
      ['Louisiana', 'LA'],
      ['Maine', 'ME'],
      ['Marshall Islands', 'MH'],
      ['Maryland', 'MD'],
      ['Massachusetts', 'MA'],
      ['Michigan', 'MI'],
      ['Minnesota', 'MN'],
      ['Mississippi', 'MS'],
      ['Missouri', 'MO'],
      ['Montana', 'MT'],
      ['Nebraska', 'NE'],
      ['Nevada', 'NV'],
      ['New Hampshire', 'NH'],
      ['New Jersey', 'NJ'],
      ['New Mexico', 'NM'],
      ['New York', 'NY'],
      ['North Carolina', 'NC'],
      ['North Dakota', 'ND'],
      ['Northern Mariana Islands', 'NP'],
      ['Ohio', 'OH'],
      ['Oklahoma', 'OK'],
      ['Oregon', 'OR'],
      ['Pennsylvania', 'PA'],
      ['Puerto Rico', 'PR'],
      ['Rhode Island', 'RI'],
      ['South Carolina', 'SC'],
      ['South Dakota', 'SD'],
      ['Tennessee', 'TN'],
      ['Texas', 'TX'],
      ['US Virgin Islands', 'VI'],
      ['Utah', 'UT'],
      ['Vermont', 'VT'],
      ['Virginia', 'VA'],
      ['Washington', 'WA'],
      ['West Virginia', 'WV'],
      ['Wisconsin', 'WI'],
      ['Wyoming', 'WY'],
  ];

  // So happy that Canada and the US have distinct abbreviations
  var provinces = [
      ['Alberta', 'AB'],
      ['British Columbia', 'BC'],
      ['Manitoba', 'MB'],
      ['New Brunswick', 'NB'],
      ['Newfoundland', 'NF'],
      ['Northwest Territory', 'NT'],
      ['Nova Scotia', 'NS'],
      ['Nunavut', 'NU'],
      ['Ontario', 'ON'],
      ['Prince Edward Island', 'PE'],
      ['Quebec', 'QC'],
      ['Saskatchewan', 'SK'],
      ['Yukon', 'YT'],
  ];
  var regions = states.concat(provinces);
  var i;
  if (to === "to_agg") {
      for (i = 0; i < regions.length; i++) {
          if (regions[i][0] === input) {
              return (regions[i][1]);
          }
      }
  } else if (to === "to_name") {
      input = input.toUpperCase();
      for (i = 0; i < regions.length; i++) {
          if (regions[i][1] === input) {
              return (regions[i][0]);
          }
      }
  }
}

function hightLightStateVaccinationRateGreater20(target){
  var targetlist =['California','New York'];
  var i;
  for(i = 0;i<targetlist.length;i++)
  {
    if(target === targetlist[i]) return true;
  }
  return false;
}
function hightLightStateVaccinationRateGreater40(target){
  var targetlist =['Massachusetts','Pennsylvania'];
  var i;
  for(i = 0;i<targetlist.length;i++)
  {
    if(target === targetlist[i]) return true;
  }
  return false;
}
function hightLightStateVaccinationRateGreater60(target){
  var targetlist =['Washington','Oregon'];
  var i;
  for(i = 0;i<targetlist.length;i++)
  {
    if(target === targetlist[i]) return true;
  }
  return false;
}
function hightLightStateVaccinationRateGreater80(target){
  var targetlist =['New Jersey'];
  var i;
  for(i = 0;i<targetlist.length;i++)
  {
    if(target === targetlist[i]) return true;
  }
  return false;
}
function getStateData (id, name) {

  /*
  Make call to backend to fetch data for the state, return type will be JSON 
  */

  return name; 
}
class Map extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedStateName : 'Unselected State',
      selectedStateAgg: 'Unselected State'
    }
  }
  mapHandler = geo => () => {
    this.setState({selectedStateName:geo.properties.name, selectedStateAgg:convertRegion(geo.properties.name,'to_agg')});
    this.props.onPlaceChange(convertRegion(geo.properties.name,'to_agg'),geo.id);
  } 
  render(){
  return (
    <ComposableMap data-tip ="" projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
              {geographies.map((geo) =>
              { 
                if(hightLightStateVaccinationRateGreater20(geo.properties.name))
                {
                  return <Geography key={geo.rsmKey} stroke="white" geography={geo} fill="#4db6ac" data-tip data-for={geo.id} onClick = {this.mapHandler(geo)}  onMouseEnter = {() => 
                            { 
                              const name = geo.properties.name; 
                              const id = geo.id; 
                              const data = name;                 
                              const setToolTipContent = this.props.setToolTipContent;
                              setToolTipContent(`<h3>${data}</h3>
                              <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`);
                            }}
                            onMouseLeave = { () =>{
                              const setToolTipContent = this.props.setToolTipContent;
                              setToolTipContent("");
                            }}
                            style={{
                              hover: {
                              stroke: "black"
                            }
                          }}
                        />
                }
                else if(hightLightStateVaccinationRateGreater40(geo.properties.name)) {
                  return <Geography key={geo.rsmKey} stroke="white" geography={geo} fill="#009688" data-tip data-for={geo.id} onClick = {this.mapHandler(geo)}  onMouseEnter = {() => 
                          { 
                            const name = geo.properties.name; 
                            const id = geo.id; 
                            const data = name;          
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent(`<h3>${data}</h3>
                            <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`);
                          }}
                          onMouseLeave = { () =>{
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent("");
                          }}
                          style={{
                            hover: {
                            stroke: "black"
                          }
                        }}
                      />
                }
                else if(hightLightStateVaccinationRateGreater60(geo.properties.name)){
                  return <Geography key={geo.rsmKey} stroke="white" geography={geo} fill="#00796b" data-tip data-for={geo.id} onClick = {this.mapHandler(geo)} onMouseEnter = {() => 
                          { 
                            const name = geo.properties.name; 
                            const id = geo.id; 
                            const data = name;       
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent(`<h3>${data}</h3>
                            <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`);
                          }}
                          onMouseLeave = { () =>{
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent("");
                          }}
                          style={{
                            hover: {
                            stroke: "black"
                          }
                        }}
                    />
                }
                else if(hightLightStateVaccinationRateGreater80(geo.properties.name)){
                  return <Geography key={geo.rsmKey} stroke="white" geography={geo} fill="#004d40" data-tip data-for={geo.id} onClick = {this.mapHandler(geo)}  onMouseEnter = {() => 
                          { 
                            const name = geo.properties.name; 
                            const id = geo.id; 
                            const data = name;                
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent(`<h3>${data}</h3>
                            <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`);
                          }}
                          onMouseLeave = { () =>{
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent("");
                          }}
                          style={{
                            hover: {
                            stroke: "black"
                          }
                        }}
                      />
                }
                else{
                  return <Geography key={geo.rsmKey} stroke="white" geography={geo} fill="#b2dfdb" data-tip data-for={geo.id} onClick = {this.mapHandler(geo)}  onMouseEnter = {() => 
                          { 
                            const name = geo.properties.name; const id = geo.id; 
                            const data = getStateData(id, name);                 
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent(`<h3>${data}</h3>
                            <p style ="display: inline;"><h2 style = "display: inline;">${id} DAYS</h2>    to Herd Immunity</p>`);
                          }}
                          onMouseLeave = { () =>{
                            const setToolTipContent = this.props.setToolTipContent;
                            setToolTipContent("");
                          }}
                          style={{
                            hover: {
                            stroke: "black"
                          }
                        }}
                      />
                }
            }
            )}
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
  }
};

export default Map;
