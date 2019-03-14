import React from "react";
function BarGroup(props) {
    let barPadding = 2;
    let barColour = '#348AA7';
    // let xMid = props.barWidth * 10;
    // let yMid = props.barWidth;
    let heightScale = d => d * props.barWidth / 10;
  
    let height = heightScale(props.d.value);
    let negativeValue = -Math.abs(props.d.value);
    let xMid = heightScale(props.d.value * 2)
    let yMid = props.barWidth;
    console.log("height:", height)
    console.log("xMid:", xMid)
    console.log("props.d:", props.d.value)
    console.log("negativeValue:", negativeValue)
    
    return <g className="bar-group">
        <text className="name-label" x={height * -2} y={props.d.value} transform="rotate(45)">     
            {props.d.name}
        </text>
        <text className="value-label" x={xMid} y={props.d.value}> 
            {props.d.value}
        </text>
        <rect className="rect" y={yMid} width={props.barWidth - barPadding} height={height} fill={barColour} transform="translate(250, 400) rotate(180)"/>
    </g>
}
export default BarGroup