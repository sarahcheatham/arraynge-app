import React, { Component } from 'react';
import PropTypes from "prop-types";

class StudentList extends Component{
    render(){
        let props = this.props;
        let whatToShow = ""
        if(props.EOYscore !== ""){
            whatToShow = props.EOYscore
        }
        return(
            <li className="studentlistitem">
                <span className="studentlist listName">Student:{" "}{props.firstName}</span>
                <span className="studentlist listBOY">BOY Score:{" "}{props.BOYscore}</span>
                <span className="studentlist listEOYg">EOY Goal:{" "}{props.EOYgoal}</span>
                <span className="studentlist listMOY">MOY Score:{" "}{props.MOYscore}</span>
                <span className="studentlist listEOYs">{whatToShow}{" "}{props.EOYscore}</span>
            </li>
        )
    }
}
StudentList.propTypes = {
    firstName: PropTypes.string.isRequired,
    BOYscore: PropTypes.number,
    EOYgoal: PropTypes.number,
    MOYscore: PropTypes.number,
    EOYscore: PropTypes.number
};

export default StudentList;