import React from "react";
import benchmarks from '../../api/benchmarks.json';

function BarGroup(props) {
    console.log("props:", props.d)
    let barPadding = 20;
    let barColour = '#348AA7';
    let heightScale = d => d * props.barWidth / 10;
    let height = heightScale(props.d);
    // let negativeValue = -Math.abs(props.d);
    // let xMid = heightScale(props.d * 2)
    let yMid = props.barWidth;
    return <g className="bar-group">
        <text className="name-label" x={450} y={-80} transform="rotate(70)">     
            {props.d.name}
        </text>
        <text className="value-label" x={230} y={300}> 
            {props.d}
        </text>
        <rect className="rect" y={yMid} width={props.barWidth - barPadding} height={height} fill={barColour} transform="translate(275, 350) rotate(180)"/>
    </g>
}
export default BarGroup