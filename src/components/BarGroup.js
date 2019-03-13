import React, {Component} from "react";
function BarGroup(props) {
    let barPadding = 2;
    let barColour = '#348AA7';
    let xMid = props.barWidth * -1;
    let yMid = props.barWidth;
    let heightScale = d => d * props.barWidth / 10;
  
    let height = heightScale(props.d.value);
    // height = height / 6;
    console.log("height:", height)
    console.log("xMid:", xMid)
    
    return <g className="bar-group">
        <rect y={yMid} width={props.barWidth - barPadding} height={height} fill={barColour}/>
        <text className="name-label" x={height} y={yMid}>     
            {props.d.name}
        </text>
        <text className="value-label" x={xMid} y={height}> 
            {props.d.value}
        </text>
    </g>
}
export default BarGroup