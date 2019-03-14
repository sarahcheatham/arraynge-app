import React from "react";
import BarGroup from './BarGroup';
import './BarChart.css';
import benchmarks from '../../api/benchmarks.json';

class BarChart extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [
        { name: 'Below Grade Level', value: 60 },
        { name: 'Above Grade Level', value: 100 },
      ]
    }
  }

  componentDidMount(){
    this.props.loadUserId();
    this.props.loadStudentData();
    console.log("benchmarks:", benchmarks)
  }
  
    render() {
      console.log(this.props.studentdata)
      let barWidth = 20;
      console.log("barWidth:", barWidth)
      let barGroups = this.state.data.map((d, i) => 
        <g transform={`translate(${i * barWidth}, 0)`}>
          <BarGroup d={d} barWidth={barWidth}/>
        </g>
      )                         
      
      return <svg width="500" height="800" >
        <g className="container">
          <text className="title" x="10" y="30">Benchmark Graph</text>
          <g className="chart">
            {barGroups}
          </g>
        </g>
      </svg>
    }
  }
export default BarChart;

