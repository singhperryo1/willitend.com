import React from 'react';
import ReactECharts from 'echarts-for-react';
import { colors } from '@material-ui/core';
const map = {
    "AL":"Alabama",
    "AK":"Alaska",
    "AZ":"Arizona",
    "AR":"Arkansas",
    "CA":"California",
    "CO":"Colorado",
    "CT":"Connecticut",
    "DE":"Delaware",
    "DC":"District of Columbia",
    "FL":"Florida",
    "GA":"Georgia",
    "HI":"Hawaii",
    "ID":"Idaho",
    "IL":"Illinois",
    "IN":"Indiana",
    "IA":"Iowa",
    "KS":"Kansas",
    "KY":"Kentucky",
    "LA":"Louisiana",
    "ME":"Maine",
    "MD":"Maryland",
    "MA":"Massachusetts",
    "MI":"Michigan",
    "MN":"Minnesota",
    "MS":"Mississippi",
    "MO":"Missouri",
    "MT":"Montana",
    "NE":"Nebraska",
    "NV":"Nevada",
    "NH":"New Hampshire",
    "NJ":"New Jersey",
    "NM":"New Mexico",
    "NY":"New York",
    "NC":"North Carolina",
    "ND":"North Dakota",
    "OH":"Ohio",
    "OK":"Oklahoma",
    "OR":"Oregon",
    "PA":"Pennsylvania",
    "RI":"Rhode Island",
    "SC":"South Carolina",
    "SD":"South Dakota",
    "TN":"Tennessee",
    "TX":"Texas",
    "UT":"Utah",
    "VT":"Vermont",
    "VA":"Virginia",
    "WA":"Washington",
    "WV":"West Virginia",
    "WI":"Wisconsin",
    "WY":"Wyoming",
    "AS":"American Samoa",
    "FM":"Micronesia",
    "GU":"Guam",
    "MH":"Marshall Islands",
    "MP":"Northern Marianas",
    "PW":"Palau",
    "PR":"Puerto Rico",
    "VI":"U.S. Virgin Islands",
}
export default function MapEcharts (props) {
  var stateName =[];
  var remainingDays =[];
  //Data Initialization
  for(let i = 0;i<props.stateInfo.length;i++){
      stateName.push(props.stateInfo[i].name);
      remainingDays.push(props.stateInfo[i].hdays);
  }
  const option = {
    title: {
      text: 'Days Until Herd Immunity',
      left: "center",
      textStyle:{
        fontSize: 20,
        fontWeight :'bold'
      }
    },
    tooltip: {},
    legend: {
      data:['Days'],
      left:'right'
    },
    xAxis: {
      data: stateName,
      name: 'States',
      nameLocation:'end',
      left:'right',
      axisLine:{
        symbol: ['none','arrow'],
        symbolOffset:[0,12]
      },
      nameTextStyle: {
        fontWeight : 'bold',
        fontSize: '20',
        fontFamily: "monospace",
      }
    },
    yAxis: {
        name: 'Days',
        nameLocation:'start',
        nameTextStyle: {
            align:'center',
            verticalAlign:'top',
            fontWeight : 'bold',
            fontSize: '20',
            fontFamily: "monospace",
      }
    },
    series: [{
      name: 'Days',
      showBackground: true,
      type: 'bar',
      data: remainingDays,
      label: {
        position: 'top',
        show: true
      },
    }]
  };
    return <ReactECharts option={option} style={{ height: 400 }} opts={{ renderer: 'svg' }}
  />;
};