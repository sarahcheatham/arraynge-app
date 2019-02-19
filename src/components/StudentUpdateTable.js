import React, { Component } from 'react';
import PropTypes from "prop-types";

class StudentUpdateTable extends Component{
    constructor(){
        super();
        this.state={
            isEdit: false,
            save_changes:{},
            userId: "",
            name: "",
            subject: "",
            score: [
                {BOYscore: ''},
                {EOYgoal: ''},
                {MOYscore: ''},
                {EOYscore: ''}
            ]
        }
    }
    render(){
        let props = this.props;
        return(
            <tr className="A">
                <td className="tablecell">{props.name}</td>
                <td className="tablecell">{props.subject}</td>
                <td className="tablecell">{props.BOYscore}</td>
                <td className="tablecell">{props.EOYgoal}</td>
                <td className="tablecell">{props.MOYscore}</td>
                <td className="tablecell">{props.EOYscore}</td>
            </tr>
        )
    }
}
StudentUpdateTable.propTypes = {
    name: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    BOYscore: PropTypes.number,
    EOYgoal: PropTypes.number,
    MOYscore: PropTypes.number,
    EOYscore: PropTypes.number
};

export default StudentUpdateTable;