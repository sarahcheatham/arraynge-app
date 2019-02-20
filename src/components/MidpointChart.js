import React, {Component} from "react";
import Chart from 'chart.js';


class MidpointChart extends Component{
    constructor(){
        super();
        this.state={

        }
        // this.renderChart = this.renderChart.bind(this);
    }
    // renderChart(event){
        
    // }
    render(){
        return(
            <div>
                <canvas id="myChart" width="400" height="400" onLoad={this.renderChart}></canvas>
            </div>
        )
    }
}
export default MidpointChart;