import React, {Component} from "react";
function BarGroup(props) {
    let barPadding = 2;
    let barColour = '#348AA7';
    let xMid = props.barWidth * -1;
    let yMid = props.barWidth;
    let heightScale = d => d * props.barWidth;
  
    let height = heightScale(props.d.value);
    height = height / 6;
    console.log("height:", height / 6)
    console.log("xMid:", xMid)
    
    return <g className="bar-group">
        <rect y={yMid} width={props.barWidth - barPadding} height={height} fill={barColour} alignmentBaseline="baseline"/>
        <text className="name-label" x={height} y={yMid} alignmentBaseline="baseline" >     
            {props.d.name}
        </text>
        <text className="value-label" x={xMid} y={height} alignmentBaseline="baseline"> 
            {props.d.value}
        </text>
    </g>
}
export default BarGroup