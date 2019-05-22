import React from "react";
import './BarChart2.css';

const SubjectButton = (props) => {
    return(
        <button className={props.className} onClick={props.subjectSwitch}>{props.text}</button>
    )
}

export default SubjectButton;