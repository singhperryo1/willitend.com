import React from 'react';
import ReactECharts from 'echarts-for-react';

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