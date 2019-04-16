import React from "react";
import { Table } from 'react-bootstrap';

function BarChartTable(props){
    let styleToShow = "";
    const noShow = {
        display: 'none'
    }
    const show = {
        display: 'block'
    }
    if(props.below === 0 && props.above === 0){
        styleToShow = noShow
    } else {
        styleToShow = show
    }
    return (
        <Table className="barChartTable" style={styleToShow}>
            <thead>
                <th className="graphTable">Below <br/>Grade Level:{" "}{props.below}<br/></th>
                <th className="graphTable">At or Above <br/>Grade Level:{" "}{props.above}<br/></th>
            </thead>
        </Table>
    )
}
export default BarChartTable;