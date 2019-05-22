import React, { Component } from 'react';
import Chart from "chart.js";
import benchmarks from '../../api/benchmarks.json';
import "./BarChart2.css";

class BoyBarChart extends Component{
    constructor(props){
        super(props);
    }
    chartRef = React.createRef();

    componentDidMount(){
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            //Bring in data for the graph
            data:{
                labels: ["Below Grade Level", "Above Grade Level"],
                datasets: [

                ]
            },
            options: {
                title: {
                    display: true,
                    text: "Benchmark Graph",
                    fontSize: 24
                },
                scales: {
                    xAxes: [{
                        type: 'category',
                        labels: ["Below Grade Level", "At or Above Grade Level"]
                    }],
                    yAxes: [{
                        type: 'linear',
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 30,
                            stepSize: 2
                        }
                    }]
                },
                layout: {
                    padding: {
                        left: 50,
                        right: 0,
                        top: 0,
                        bottom: 50
                    }
                }
            }
        });
    }
    handleSubjectChange(event){
        this.setState({
            subject: event.subject
        })
      }
    
      handleSortBy(event){
        this.setState({
            sortBy: event.sortBy
        });
      }
    
    render(){
        return (
            <div class="graphContainer" style={{position: "relative", height: "100vh", width: "80vw"}}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

export default BoyBarChart;