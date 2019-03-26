import React from "react";
import benchmarks from '../../api/benchmarks.json';

function BarGroup(props) {
    let barPadding = 5;
    let barColour = '#348AA7';
    let heightScale = d => d * props.barWidth / 10;
    let height = heightScale(props.d.value);
    let negativeValue = -Math.abs(props.d.value);
    let xMid = heightScale(props.d.value * 2)
    let yMid = props.barWidth;
    // const bm = benchmarks.filter((benchmark, index)=>{
    //     if(benchmark.gradelevel === props.gradelevel.toUpperCase()){
    //         return benchmark
    //     }
    // })
    // const correctBenchmark = bm.filter((benchmark, index)=>{
    //     if(props.subject === benchmark.subject){
    //         return benchmark
    //     }
    // })
    // console.log("correctBenchmark:", correctBenchmark)
    // console.log("props.subject:", props.subject)
    return <g className="bar-group">
        <text className="name-label" x={450} y={-80} transform="rotate(70)">     
            {props.d.name}
        </text>
        <text className="value-label" x={220} y={375}> 
            {props.d.value}
        </text>
        <rect className="rect" y={yMid} width={props.barWidth - barPadding} height={height} fill={barColour} transform="translate(250, 400) rotate(180)"/>
    </g>
}
export default BarGroup