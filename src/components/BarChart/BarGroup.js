import React from "react";
import benchmarks from '../../api/benchmarks.json';

const BarGroup = (props) => {
    const barPadding = 25;
    const heightScale = data => data * props.barWidth / 10;
    let height = heightScale(props.data);

    const red = "#DF4C36";
    const green = "#8FAD57";
    const index = props.index;
    let fillColor = "";

    //0 is below grade level on the graph
    //1 is at or above grade level on the graph
    if(index === 0){
        fillColor = red;
    }else if (index === 1){
        fillColor = green;
    }

    return <g className="bar-group">
        <rect className="rect" y={props.barWidth} width={props.barWidth - barPadding} height={height} fill={fillColor} transform={`translate(${props.index * 100}, 350) rotate(180)`}/>
    </g>
}

export default BarGroup