import React, { Component } from "react";
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveButton from './SaveButton';

class ClassListItem extends Component {
    constructor(props){
        super(props);
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
        const saveButton = {
            padding: '2%',
            position: 'absolute',
            left: 500,
            height: '10px',
            display: 'inline',
            backgroundColor: '#E7F2F0',
            color: '#357E85',
            boxShadow: 'inset 1em -1em 1em -1em #357E85',
            borderRadius: '5px'
        }
        const iconStyle = {
            height: 14,
            position: 'relative',
            top: -6
        }
        const styleText = {
            height: 14,
            position: 'relative',
            top: -8
        }
        return (
            <span className="classListProps" itemID={this.props.itemId}>
                <div><span className={this.props.className}>YEAR:</span>{" "}<span style={textStyle}>{this.props.year}</span><Checkbox style={checkbox} onChange={this.props.onCheck}/></div>
                {/* <div><span className={this.props.className}>YEAR:</span>{" "}<span style={textStyle}>{this.props.year}</span><SaveButton style={saveButton} iconStyle={iconStyle} styleText={styleText} show={this.props.show}/><Checkbox style={checkbox} onChange={this.props.onCheck}/></div> */}
                <div><span className={this.props.className}>GRADE LEVEL:</span>{" "}<span style={textStyle}>{this.props.gradelevel}</span></div>
                <div><span className={this.props.className}>SUBJECT:</span>{" "}<span style={textStyle}>{this.props.subject}</span></div>
                <div><span className={this.props.className}>NUMBER OF STUDENTS:</span>{" "}<span style={textStyle}>{this.props.numStudents}</span><DeleteButton style={buttonStyle}/></div>
            </span>
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