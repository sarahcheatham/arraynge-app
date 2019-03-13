import React, {Component} from "react";
import BarGroup from './BarGroup';

class BarChart extends React.Component {
    state = {
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
  
    render() {
      let barWidth = 30;
      let positiveBarWidth = Math.abs(barWidth);
      console.log("barWidth", barWidth)
      console.log("positiveBarWidth:", positiveBarWidth)
      let barGroups = this.state.data.map((d, i) => 
        // console.log("d:",d, i)
        <g transform={`translate(${i * barWidth}, 0)`}>
          <BarGroup d={d} barWidth={positiveBarWidth}/>
        </g>
        // <g transform={`translate(${i * barWidth}, -20)`}>
        //   <BarGroup d={d} barWidth={barWidth} />
        // </g>
      )                         
      
      return <svg width="500" height="800" >
        <g className="container">
          <text className="title" x="10" y="30">Benchmark Graph</text>
          <g className="chart" transform="translate(250, 400) rotate(180)">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
export default BarChart;

