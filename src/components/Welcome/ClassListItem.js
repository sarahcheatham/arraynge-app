import React, { Component } from "react";
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveButton from './SaveButton';

class ClassListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemId: "",
            year: "",
            gradelevel: "",
            subject: "",
            numStudents: "",
            
        }
    }
    checked = item => {
        console.log("CHECKED ITEM:",item)
        const li = this.props;
        const itemId = this.props.itemId;
        const gradelevel = this.props.gradelevel;
        const subject = this.props.subject;
        const year = this.props.year;
        const numStudents = this.props.numStudents;
        console.log("li:", li)

        this.props.onCheck({
            itemId, gradelevel, subject, year, numStudents
        })
    }
    render(){
        const textStyle = {
            color: '#F9586B'
        }
        const checkbox = {
            float: 'right',
            height: '10px',
            width: '10px',
            padding: 0,
            marginTop: '1%'
        }
        const buttonStyle = {
            float: 'right',
            padding: 0,
            margin: 0,
        }
        return (
            <li onChange={this.checked} itemId={this.props.itemId} className="classListProps">
                <div><span className={this.props.className}>YEAR:</span>{" "}<span style={textStyle}>{this.props.year}</span><Checkbox style={checkbox} onChange={this.props.onCheck}/></div>
                <div><span className={this.props.className}>GRADE LEVEL:</span>{" "}<span style={textStyle}>{this.props.gradelevel}</span></div>
                <div><span className={this.props.className}>SUBJECT:</span>{" "}<span style={textStyle}>{this.props.subject}</span></div>
                <div><span className={this.props.className}>NUMBER OF STUDENTS:</span>{" "}<span style={textStyle}>{this.props.numStudents}</span><DeleteButton style={buttonStyle}/></div>
            </li>
        )
    }  
}

ClassListItem.propTypes ={
    itemId: PropTypes.string.isRequired,
    // year: PropTypes.string.isRequired,
    gradelevel: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    // numStudents: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onCheck: PropTypes.func.isRequired,
    show: PropTypes.func.isRequired
};

export default ClassListItem;