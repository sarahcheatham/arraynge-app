import React from "react";

const ClassListItem = (props) => {
    return (
        <button className="classListProps">
            <div><span className={props.className}>YEAR:</span>{" "}<span className={props.className}>{props.year}</span></div>
            <div><span className={props.className}>GRADE LEVEL:</span>{" "}<span className={props.className}>{props.gradelevel}</span></div>
            <div><span className={props.className}>SUBJECT:</span>{" "}<span className={props.className}>{props.subject}</span></div>
            <div><span className={props.className}>NUMBER OF STUDENTS:</span>{" "}<span className={props.className}>{props.numStudents}</span></div>
        </button>
    )
}

export default ClassListItem;