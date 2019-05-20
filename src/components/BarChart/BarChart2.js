import React, { Component } from 'react';
import Chart from "chart.js";
import benchmarks from '../../api/benchmarks.json';
import "./BarChart2.css";

class BarChart2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            students: [],
            gradelevel: "",
            subject: "",
            sortBy: ""
        }
    }
    chartRef = React.createRef();

    componentDidMount(){
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            //choose what type of graph
            type: "bar",
            //Bring in data for the graph
            data: {
                labels: ["Above Grade Level", "Below Grade Level"]

            },
            // data: {
            //     labels: yearLabels,
            //     datasets: [
            //         { label: "Sales", data: managerData },
            //         { label: "National Average", data: nationalAverageData}
            //     ]
            // },
            options: {
                //customize chart options
            }
        });
    }
    render(){
        return (
            <div class="graphContainer">
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default BarChart2;