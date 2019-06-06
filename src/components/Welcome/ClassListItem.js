import React from "react";
import Checkbox from './Checkbox';

const ClassListItem = (props) => {
    const textStyle = {
        color: '#F9586B'
    }
    const checkbox = {
        float: 'right',
        height: '15px',
        width: '15px',
        appearance: 'none'
    }
    // <input type="checkbox" style={checkbox}/>
    return (
        <div className="classListProps">
            <div><span className={props.className}>YEAR:</span>{" "}<span style={textStyle}>{props.year}</span><Checkbox style={checkbox} onCheck={props.onCheck}/></div>
            <div><span className={props.className}>GRADE LEVEL:</span>{" "}<span style={textStyle}>{props.gradelevel}</span></div>
            <div><span className={props.className}>SUBJECT:</span>{" "}<span style={textStyle}>{props.subject}</span></div>
            <div><span className={props.className}>NUMBER OF STUDENTS:</span>{" "}<span style={textStyle}>{props.numStudents}</span></div>
        </div>
    )
}

export default ClassListItem;